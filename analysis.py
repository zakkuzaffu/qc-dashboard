import pandas as pd

qc_data = {
    'Sample_ID' : [101, 102, 103, 104],
    'Strength' : [460, 445, 510, 390],
    'Pass' : ['Y', 'N', 'Y', 'N'],
    'Risk_Level' : ['Unchecked', 'Unchecked', 'Unchecked', 'Unchecked']
}

df = pd.DataFrame(qc_data)

failed_samples_filter = df['Pass'] == 'N'

failed_samples = df[failed_samples_filter]

print(failed_samples)