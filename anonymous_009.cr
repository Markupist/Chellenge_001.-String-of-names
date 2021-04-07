def names(list)
    list.map { |i| i[:name]}
end

def inComma(list)
    list.join ", "
end

def format(list)
    last = list.pop
    list.empty? ? last : "#{inComma(list)} & #{last}"
end

def method(list)
    format names list
end
