import tiktoken 

enc = tiktoken.encoding_for_model("gpt-4o")

text = "hey There! my name is aman kumar."
tokens = enc.encode(text)

# Tokens [48467, 3274, 0, 922, 1308, 382, 49610, 14289, 277, 13]

print("Tokens", tokens)


decoded = enc.decode([48467, 3274, 0, 922, 1308, 382, 49610, 14289, 277, 13])

# Decoded: hey There! my name is aman kumar.

print("Decoded:", decoded)