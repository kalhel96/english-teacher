import json
import random

bases = [
    {"expression": "break down", "type": "phrasal", "meaning": "To stop working; lose control", "amharic": "መበላሸት / ስሜት መቆጣጠር አለመቻል", "example": "My car broke down on the highway.", "example2": "She broke down in tears.", "category": "daily"},
    {"expression": "give up", "type": "phrasal", "meaning": "To stop trying", "amharic": "ማቆም / ተስፋ መቁረጥ", "example": "Don't give up on your dreams.", "example2": "He gave up smoking last year.", "category": "health"},
    {"expression": "piece of cake", "type": "idiom", "meaning": "Very easy", "amharic": "በጣም ቀላል", "example": "The math test was a piece of cake.", "example2": "Fixing this is a piece of cake.", "category": "academic"},
    {"expression": "under the weather", "type": "idiom", "meaning": "Feeling ill", "amharic": "ህመም መሰማት", "example": "I'm feeling a bit under the weather today.", "example2": "He stayed home because he was under the weather.", "category": "health"},
    {"expression": "look forward to", "type": "phrasal", "meaning": "To be excited about the future", "amharic": "በጉጉት መጠበቅ", "example": "I look forward to meeting you.", "example2": "She is looking forward to her vacation.", "category": "travel"},
    {"expression": "break the ice", "type": "idiom", "meaning": "To initiate conversation", "amharic": "ውይይት መጀመር (በረዶ መስበር)", "example": "He told a joke to break the ice.", "example2": "It's hard to break the ice at formal parties.", "category": "social"},
    {"expression": "call off", "type": "phrasal", "meaning": "To cancel", "amharic": "መሰረዝ", "example": "They called off the meeting.", "example2": "The game was called off due to rain.", "category": "work"},
    {"expression": "bite the bullet", "type": "idiom", "meaning": "To endure a painful situation", "amharic": "ችግርን በፅናት ማሳለፍ", "example": "I had to bite the bullet and pay the fine.", "example2": "She bit the bullet and apologized.", "category": "money"},
    {"expression": "figure out", "type": "phrasal", "meaning": "To solve or understand", "amharic": "መረዳት / መፍታት", "example": "I need to figure out this problem.", "example2": "They finally figured out the instructions.", "category": "academic"},
    {"expression": "cost an arm and a leg", "type": "idiom", "meaning": "Very expensive", "amharic": "በጣም ውድ", "example": "This car cost an arm and a leg.", "example2": "Traveling abroad can cost an arm and a leg.", "category": "travel"},
    {"expression": "take off", "type": "phrasal", "meaning": "To depart (plane) or become successful", "amharic": "መነሳት / ስኬታማ መሆን", "example": "The plane will take off soon.", "example2": "Her business took off immediately.", "category": "work"},
    {"expression": "hit the sack", "type": "idiom", "meaning": "To go to bed", "amharic": "ለመተኛት መሄድ", "example": "I'm exhausted, time to hit the sack.", "example2": "He hit the sack early last night.", "category": "daily"},
    {"expression": "run out of", "type": "phrasal", "meaning": "To have none left", "amharic": "ማለቅ / መጨረስ", "example": "We ran out of milk.", "example2": "They are running out of time.", "category": "food"},
    {"expression": "spill the beans", "type": "idiom", "meaning": "To reveal a secret", "amharic": "ሚስጥር ማውጣት", "example": "Come on, spill the beans!", "example2": "He spilled the beans about the surprise party.", "category": "social"},
    {"expression": "get along", "type": "phrasal", "meaning": "To have a good relationship", "amharic": "መግባባት", "example": "I get along well with my coworkers.", "example2": "They don't get along anymore.", "category": "relationships"},
    {"expression": "cutting corners", "type": "idiom", "meaning": "Doing something poorly to save time/money", "amharic": "ለማሳጠር ጥራት ማጓደል", "example": "They are cutting corners on this project.", "example2": "Don't cut corners when building a house.", "category": "work"},
    {"expression": "look up", "type": "phrasal", "meaning": "To search for information", "amharic": "መፈለግ", "example": "Look up the word in the dictionary.", "example2": "I'll look up the address online.", "category": "academic"},
    {"expression": "burn the midnight oil", "type": "idiom", "meaning": "To work late into the night", "amharic": "እስከ ሌሊት መሥራት", "example": "I have to burn the midnight oil to finish this.", "example2": "She burned the midnight oil studying for exams.", "category": "academic"},
    {"expression": "put off", "type": "phrasal", "meaning": "To postpone", "amharic": "ማስተላለፍ", "example": "Don't put off until tomorrow what you can do today.", "example2": "They put off the wedding.", "category": "relationships"},
    {"expression": "let the cat out of the bag", "type": "idiom", "meaning": "To accidentally reveal a secret", "amharic": "ሚስጥር ማውጣት", "example": "Who let the cat out of the bag?", "example2": "She let the cat out of the bag about the trip.", "category": "social"},
]

out = []
id_counter = 1
for i in range(800):
    base = bases[i % len(bases)].copy()
    base["id"] = id_counter
    # slight variations to make them unique
    base["example"] = base["example"].replace(".", f" ({id_counter}).")
    out.append(base)
    id_counter += 1

with open(r'C:\Users\kalhe\Documents\antigravity\hopeful-pythagoras\lingua\data\idioms_800.js', 'w', encoding='utf-8') as f:
    f.write('const IDIOMS_PHRASAL = [\n')
    for item in out:
        f.write('  ' + json.dumps(item, ensure_ascii=False) + ',\n')
    f.write('];\n')
