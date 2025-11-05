MAX_STRENGTH = 450  # in MPa
MAX_DENSITY = 8.0    # in g/cm^3

def check_suitability(strength, density):
    if strength < MAX_STRENGTH:
        return "MATERIAL FAILED: Strength is too low."
    elif density > MAX_DENSITY:
        return "MATERIAL WARNING: Density exceeds limit."
    else:
        return "MATERIAL PASSED."

material_result = check_suitability(440, 7.85)
print(material_result)

material_result = check_suitability(460, 7.5)
print(material_result)