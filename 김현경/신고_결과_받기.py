def solution(id_list, report, k):
    answer = [0] * len(id_list)
    report_dict = {user: 0 for user in id_list}
    user_reports = {user: [] for user in id_list}
    
    report = set(report)
    
    for r in report:
        reporter, reportedUser = r.split()
        report_dict[reportedUser] += 1
        user_reports[reporter].append(reportedUser)
    
    for user, cnt in report_dict.items():
        if cnt >= k:
            for reporter in user_reports:
                if user in user_reports[reporter]:
                    idx = id_list.index(reporter)
                    answer[idx] += 1
    
    return answer