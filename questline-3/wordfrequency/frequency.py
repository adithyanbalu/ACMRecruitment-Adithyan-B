text=input('enter a paragraph : ').lower().split()
words=[]
counts=[]

for w in text:
    if w in words:
        idx=words.index(w)
        counts[idx]+=1
    else:
        words.append(w)
        counts.append(1)
for i in range(len(words)):
               print(f'{words[i]}-->{counts[i]}')
