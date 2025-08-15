from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np
import pandas as pd 

# Load model and scaler once on startup
model = joblib.load("models/crop_recommendation_model.joblib")
scaler = joblib.load("models/scaler.joblib")
metadata = joblib.load("models/metadata.joblib")

app = FastAPI()

class CropRequest(BaseModel):
    N: float
    P: float
    K: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float

@app.post("/predict")
def predict(data: CropRequest):
    # Create a DataFrame with correct column names
    feature_names = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']
    features = pd.DataFrame([[data.N, data.P, data.K, data.temperature,
                             data.humidity, data.ph, data.rainfall]],
                           columns=feature_names)
    scaled = scaler.transform(features)
    probs = model.predict_proba(scaled)[0]
    classes = metadata["classes"]

    paired = sorted(zip(classes, probs), key=lambda x: x[1], reverse=True)
    return {
        "success": True,
        "predictions": [
            {"name": name, "probability": round(prob*100, 2)}
            for name, prob in paired[:3]
        ]
    }


