def weightLoss(weight, target):
    newWeight = weight
    actualDeficit = 300
    deficit = []
    for weeks in range(51):
        if newWeight <= target:
            print(sum(deficit))
            print(sum(deficit) / actualDeficit, "weeks left after", actualDeficit,"daily cut")
            return weeks, round(newWeight, 2), weeks + sum(deficit) / actualDeficit
        else:
            print("Week " + str(weeks + 1) + ": ", end='')
            print(round(newWeight, 2), " - ", round((newWeight/100), 3), end='')
            print(" Daily Deficit kCal: ", round(1102*(newWeight/100), 3))
            deficit.append((1102*(newWeight/100)) - actualDeficit)
            newWeight = newWeight - (newWeight/100)

eden = weightLoss(62.8, 53)

print(eden)

# def weightLoss(weight, target):
#     newWeight = weight
#     actualDeficit = 220
#     deficit = []
#     for weeks in range(300):
#         if newWeight <= target:
#             print(sum(deficit))
#             print(round(sum(deficit) / actualDeficit, 1), "weeks left if actual daily cut is", actualDeficit,"kcal, as recommended")
#             print("Ideal Ten Percent Weight Loss in {} weeks.".format(weeks))
#             print("Number of Weeks it'll actually take: {:0.2f}".format(weeks + sum(deficit) / actualDeficit))
#             print("Target Weight Reached As: {:0.2f}".format(newWeight))
#             return weeks, round(newWeight, 2), weeks + sum(deficit) / actualDeficit
#         else:
#             print("Week " + str(weeks + 1) + ": ", end='')
#             print(round(newWeight, 2), " - ", round((newWeight/100), 3), end=' ')
#             print(" Daily Deficit kCal: ", round(1102*(newWeight/100), 3))
#             deficit.append((1102*(newWeight/100)) - actualDeficit)
#             newWeight = newWeight - (newWeight/100)

# s = weightLoss(63.8, 53.5)

