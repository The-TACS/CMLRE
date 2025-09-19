🌊 CMLRE Biodiversity Data — Machine Learning & Visualization

This project demonstrates how to use machine learning and data visualization techniques to analyze marine biodiversity datasets.
It is based on a sample dataset (cmlre_biodiversity_data_sample.csv) provided by CMLRE (Centre for Marine Living Resources & Ecology).

📌 Features

Load and explore CSV-based marine biodiversity datasets.

Train machine learning models in Google Colab.

Predict ecological or biological metrics (e.g., fish length, biomass, species count).

Generate interactive charts and performance plots.

Easy-to-use Python notebook workflow.

🛠️ Tech Stack

Python 3

Google Colab / Jupyter Notebook

Libraries:

pandas — Data loading & cleaning

matplotlib, seaborn — Visualization

scikit-learn — Machine Learning (Linear Regression, Decision Trees, etc.)

numpy — Numerical operations

📂 Project Structure
├── cmlre_biodiversity_data_sample.csv   # Dataset (sample)
├── colab_notebook.ipynb                 # ML training & visualization workflow
├── README.md                            # Documentation

🚀 Getting Started
1. Clone the Repository
git clone (https://oceanpulse-data-hub.netlify.app/)

2. Open in Google Colab

Upload cmlre_biodiversity_data_sample.csv to your Colab environment.

Open the notebook (colab_notebook.ipynb) and run the cells step by step.

3. Install Dependencies (if running locally)
pip install pandas numpy matplotlib seaborn scikit-learn

📊 Example Workflow in Colab
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# Load dataset
data = pd.read_csv("cmlre_biodiversity_data_sample.csv")

# Select target and features
target = "length_cm"  # change to Species_Count, Biomass, etc.
features = ["Temp", "Salinity", "Depth_m"]

X = data[features]
y = data[target]

# Train/Test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Model training
model = LinearRegression()
model.fit(X_train, y_train)

# Prediction
y_pred = model.predict(X_test)

# Visualization
plt.scatter(y_test, y_pred, alpha=0.6)
plt.xlabel("Actual")
plt.ylabel("Predicted")
plt.title(f"Prediction Performance for {target}")
plt.show()

📈 Visualizations

Species distribution across temperature/salinity.

Correlation heatmaps of environmental variables.

Histograms of fish sizes (length_cm).

Prediction performance scatter plots.

🤝 Contributing

Pull requests are welcome! If you’d like to improve visualizations, add new ML models, or extend the dataset handling, feel free to fork and submit changes.

📜 License

This project is open-source under the MIT License.

✨ Built for marine biodiversity research & AI-driven ecological insights.
