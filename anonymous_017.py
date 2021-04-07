arr_name = [
    {"name": "Lisa"},
    {"name": "Bart"},
    {"name": "Maggie"},
    {"name": "Masha"}
]


def new_method():
    names = [name.get("name") for name in arr_name]
    end_name = names.pop()
    return ", ".join(names)+"&"+end_name if len(names) else end_name

print(new_method())
