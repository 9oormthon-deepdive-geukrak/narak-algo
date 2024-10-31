def solution(enroll, referral, seller, amount):
    parent_referral = {}
    total_money = {}
    
    for i in range(len(enroll)):
        parent_referral[enroll[i]] = referral[i]
        total_money[enroll[i]] = 0 
    
    for i in range(len(seller)):
        curr_name = seller[i]
        curr_profit = amount[i] * 100
        
        while curr_name != '-' and curr_profit > 0:
            fee = curr_profit // 10
            curr_profit = curr_profit - fee
            
            total_money[curr_name] += curr_profit
            curr_name = parent_referral[curr_name]
            curr_profit = fee 
    
    return list(total_money.values())