f = open("new.css","w+")
# list of css-selector
selectorlist = []
# get all list in one array
with open('selectorList.css') as k:
	for selector in k:
		selectorlist.append(selector.strip())
unUsed = ''
def AddToUnUsed(line):
	global unUsed
	unUsed+=line

# get number of lines used by specific selector
def skipBracket(line, fp,f):
	global unUsed
	if '{' in line or '{' in next(fp):
		z = next(fp);
		while True:
			if '}' in z:
				AddToUnUsed(z)
				break;
			else:
				AddToUnUsed(z)
				z = next(fp);

# print selectorlist
with open('main.css') as fp:
	for line in fp:
		if line.strip() in selectorlist:
			AddToUnUsed(line)
			skipBracket(line, fp,f);
		else:
			f.write(line)
f.write("/*UnUsed CSS starts*/\n")
f.write(unUsed)
f.truncate();
f.close();