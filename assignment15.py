import pandas as pd

qc_data = {
    'Sample_ID' : [101, 102, 103, 104],
    'Strength' : [460, 445, 510, 390],
    'Pass' : ['Y', 'N', 'Y', 'Y']
}

df = pd.DataFrame(qc_data)

print(df)