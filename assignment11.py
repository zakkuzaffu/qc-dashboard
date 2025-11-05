material_strength = 460  # in MPa
material_density = 7.85  # in g/cm^3

if material_strength < 450:
    print("MATERIAL FAILED: Strength is too low.")
elif material_density > 8.0:
    print("MATERIAL FAILED: Density exceeds limit.")
else:
    print("MATERIAL PASSED.")