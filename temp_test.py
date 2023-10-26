test_dict = {"Gfg": 5, "is": 5, "Best": 5}
 
# Flag to check if all elements are same
 
# extracting value to compare
test_val = list(test_dict.values())[0]
 
res = True
for ele in test_dict:
    if test_dict[ele] != test_val:
        res = False

print(res)

