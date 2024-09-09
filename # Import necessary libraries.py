# Import necessary libraries
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, precision_score

# Generate a binary classification dataset
X_binary, y_binary = make_classification(n_samples=1000, n_features=20, n_classes=2, random_state=42)

# Split the dataset into training and testing sets
X_train_bin, X_test_bin, y_train_bin, y_test_bin = train_test_split(X_binary, y_binary, test_size=0.2, random_state=42)

# Create a Decision Tree Classifier
clf_bin = DecisionTreeClassifier(random_state=42)

# Train the classifier
clf_bin.fit(X_train_bin, y_train_bin)

# Predict the test set results
y_pred_bin = clf_bin.predict(X_test_bin)

# Calculate accuracy and precision
accuracy_bin = accuracy_score(y_test_bin, y_pred_bin)
precision_bin = precision_score(y_test_bin, y_pred_bin)

print(f"Binary Classification - Accuracy: {accuracy_bin:.2f}")
print(f"Binary Classification - Precision: {precision_bin:.2f}")
