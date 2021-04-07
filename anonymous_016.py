arr_name = [
    {"name": "Lisa"},
    {"name": "Bart"},
    {"name": "Maggie"},
    {"name": "Masha"}
]


def method(arr=[]):
    endName = arr.pop()
    finalString = ', '.join(
        map(
            str, (name.get('name') for name in arr)))
    return endName.get('name')\
        if len(arr) == 0\
        else finalString.removesuffix(', ')+'&'+endName.get('name')


print(method(arr_name))
