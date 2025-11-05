sample_a = {"strength": 420, "density": 7.8, "status": "PASS"}
sample_b = {"strength": 460, "density": 8.2, "status": "FAIL"}

batch_data = [sample_a, sample_b]

print(batch_data[1]["status"])  # Output: FAIL
sample_a["strength"] = 490