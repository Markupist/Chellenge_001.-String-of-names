def method(arr=[]):
    names=[]
    finalString=''
    for item in arr:
      names.append(item.get('name'))
    endName=names.pop()
    for name in names:
      finalString+=name+', '
    return endName if len(names)==0 else finalString.removesuffix(', ')+'&'+endName
