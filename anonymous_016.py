def method(arr=[]):
    endName = arr.pop()
    finalString = ', '.join(
        map(
            str, (name.get('name') for name in arr)))
    return endName.get('name')\
        if len(arr) == 0\
        else finalString.removesuffix(', ')+'&'+endName.get('name')
