import re

# Read the file
with open('c:/Users/RC71/Documents/etranfers.pt/script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the French Fátima description
old_text = '"L'un des plus grands centres de pèlerinage marial au monde !"'
new_text = '"L\'un des plus grands centres de pèlerinage marial au monde, le Sanctuaire de Fátima reçoit des millions de visiteurs chaque année, étant aujourd\'hui un lieu de foi, de réflexion et de profonde dévotion."'

content = content.replace(old_text, new_text)

# Write back
with open('c:/Users/RC71/Documents/etranfers.pt/script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("French Fátima translation updated successfully!")
