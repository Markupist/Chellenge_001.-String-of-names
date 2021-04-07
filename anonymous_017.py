def method(arr_name):
    names = [name.get("name") for name in arr_name]
    end_name = names.pop()
    return ", ".join(names)+"&"+end_name if len(names) else end_name
