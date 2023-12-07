class employee {
    // constructor is like __init__ for python 
    constructor(
            employeeNumber,
            firstName, 
            middleName, 
            surName, 
            age, 
            salary, 
            startDate,
            ){
        this.firstName = firstName;  // this. is like self. for python 
        this.middleName = middleName;
        this.surName = surName;
        this.age = age;
        this.salary = salary;
        this.startDate = startDate;
        this.employeeNumber = employeeNumber
    }
}







// more complex class / object
class employee {
    constructor(
            firstName, 
            middleName, 
            surName, 
            age, 
            salary, 
            startDate
            ){
        this.firstName = firstName;  
        this.middleName = middleName;
        this.surName = surName;
        this.age = age;
        this.salary = salary;
        this.startDate = startDate;
    }

    hrStats( // shows stats for worker satisfaction. note: measures guilty and unresolved cases, cases can be removed. 
        client_complaints,      // num, counts number of complaints
        client_appraisals,      // num, counts number of appraisals
        colleague_complaints,
        colleague_appraisals, 
        admin__complaints,
        admin__appraisals,
        ){
        this.client_complaints = client_complaints;  
        this.client_appraisals = client_appraisals;  
        this.colleague_complaints = colleague_complaints;   
        this.colleague_appraisals = colleague_appraisals;   
        this.admin__complaints = admin__complaints;  
        this.admin__appraisals = admin__appraisals;  
    }

    workStats( // measures quantitative value of worker, generated value, loss, etc
        workingHours, 
        numOfJobs, 
        avgJobSize,
        pushes,
        companyGrowthDuringEmployment,
    ){
        this.workingHours = workingHours;   // amount of hours spent working, without sickdays, breaks, etc
        this.numOfJobs = numOfJobs;         // number of jobs/projects completed
        this.avgJobSize = avgJobSize;       // average size of job/projects
        this.pushes = pushes;                // amount of pushes made
        this.companyGrowthDuringEmployment = companyGrowthDuringEmployment; // growth of company value during employment
    }

    function estimateDistributedCompanyValue(params) {
        let number_of_employees_then, number_of_employees_today, employee_growth = CompanyStatsByYear(this.startDate).numberOfEmployees();
        let company_value_then, company_value_today = CompanyStatsByYear(this.startDate).companyValue();
        let distributed_value_today = company_value_today / number_of_employees_today;
        let distributed_value_then = company_value_then / (number_of_employees_then-1); // -1 since were excluding the employee evaluated since he just started  
        let distributed_growth = distributed_value_today - distributed_value_then; 
        let avg_workload_score_for_all_employees = getAverageWorkloadscore("all");
        let employee_workload_score = getAverageWorkloadscore("${this.employeeNumber}");
        let score_diff_percentage = (employee_workload_score-avg_workload_score_for_all_employees)/avg_workload_score_for_all_employees
        // though not the prefeble way to do it it will still yield a fair distribution for every employee based on their work performance.
        // where lazy employees, will have to pay a "lazy tax" from their base portion, vice versa.
        let performance_adjusted_distribution = distributed_growth * score_diff_percentage;
        
        // now we need to adjust the value distribution by other factors like inflation, etc. 
        let estimated_inflation_adj_rate // a single rate representing the expected portion of value is due to inflation; made from the inflation made from startyear to today
    }
};



class CompanyStatsByYear {
    constructor (year){
        this.year = year;
    };

    function history(year){
        let credentials = getApiCredentials("admin");
        let urlObject = { 
            protocol: 'https', 
            hostname: 'comapny.com', 
            port: 1800, 
            pathname: 'api/admin/companyhistory/GET',
            auth: credentials['apiKey'],

            query: {
                    year: this.year, 
                    format: 'json'
            }, 
            hash: 'first'
        } 
        return url.format(urlObject); //placehodler gets company history from api  
    };

    function numberOfEmployees() {
        let employees_then = history(this.year)['employees']['number_of_employees'];
        let emplpoyees_today = history(new Date().getFullYear())['employees']['number_of_employees'];
        let new_employees = emplpoyees_today-emplpoyees_then
        return employees_then, employees_today, new_employees
    };

    function companyValue(){
        // bla bla bla
        let company_value_then = history(this.year)['financials']['marketValue'];
        let company_value_today = history(new Date().getFullYear())['financials']['marketValue'];
        return company_value_then, company_value_today
    };

    function getEmployeeScores(subject){
        if (subject[0].typeOf == "int"){
            // single employee -> search by number
            return history(this.year)['employees']['${subject}']['employee_scores'];
        } else{
            return history(this.year)['employees']['employee_scores']; 
        };
    };
};



function getAverageWorkloadscore(subject){
    // subject as in all employess, specific employee, branch, etc
    let employee_scores =  CompanyStatsByYear(new Date().getFullYear()).getEmployeeScores(subject);
    if (employee_scores[0].typeOf == "array") { // checking if subject is single employee og muiltiople
        //  if multiple employees:
        // makes an additional iteration to make a list of all of the avgs  
        let full_score_history = [];
        for (single_employee_score_history in employee_scores){
            // bla bla bla make avarage
            full_score_history.push(getAverageScoresFromArray(single_employee_score_history));                
        };
    }
    // makes and return one total average from avg scores for every single employees 
    // OR if single employee, it will make a avg score for that single worker and return that. 
    return getAverageScoresFromArray(full_score_history);  };

function getAverageScoresFromArray(list){
    let score_list = [];

    for (var i = 0; i < list.length; i++) {
        score_list.push(calculateWorkloadScore(i)); 
    }
    const score_sum = score_list.reduce((a,c) => a + c, 0);
    return score_sum / score_list.length;
}

function calculateWorkloadScore(annual_stats){
    // placeholder function, will calculate a score for the employees workload for year-X. 
    // calculation is based on number of jobs, pushes, workinghours, time spent pr job, etc..
    return 0.64 //place holder for score calculation
};

function getApiCredentials(personel){
    return {
        // ... bla bla bla 
        apiKey: '3jDd992nJDDd0s0sjaJD8sdh2n',
    }
};