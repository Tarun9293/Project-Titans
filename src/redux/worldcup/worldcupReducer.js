import {FETCH_DATA_SUCCESS} from './worldcupTypes'
const initialState = {
    data : [
        {"id": 1,"section": "General","question": "Who is the first Indian cricketer to bat in an ICC ODI WC Final & an ICC World T20 final at the same venue?","answer": "Yuvraj Singh(2003 WC final & 2007 WT20 final)","flag": false},
            {"id": 2,"section": "General","question": "Shane Warne & Mr X accounted for 15 of the 20 wickets in an one off test against ICC World Test Xl in Sydney in 2005. Identify X?","answer": "Stuart Macgill(Macgill got 9 Warne got 6) ","flag": false},
            {"id": 3,"section": "General","question": "What was unusual in the India Vs WI Kingston test match in 1976?","answer": "Bishan Singh Bedi withdrew his bowlers from batting fearing Micheal Holding’s hostile bowling could hurt his bowlers","flag": false},
            {"id": 4,"section": "General","question": "Which venue was a home venue for two different countries and also a neutral venue for another two countries?","answer": "Bangabandhu National Stadium,Dhaka(Pakistan played test matches as the home side when Bangladesh was called East Pakistan and also it was neutral venue for the Asian test championship and obviously Bangladesh played there after they got independence from Pakistan)","flag": false},
            {"id": 5,"section": "General","question": "Only 3 Indian captains have perfect records as ODI captain? Identify all 3?","answer": "Gambhir(6 out of 6) Rahane(3 out of 3) Kumble (1 out of 1)","flag": false},
            {"id": 6,"section": "General","question": "He is probably the only cricketer to have just one Test,one ODI,one T20I MoM award? Who is he?","answer": "Brad Hodge(He was dropped for the next match after he scored his first ODI hundred)","flag": false},
            {"id": 7,"section": "General","question": "What connects the Ranji trophy final in 1990 & Australia England Test match in Adelaide 1991?","answer": "Sourav Ganguly & Mark Waugh replaced their brothers Snehasish Ganguly & Steve Waugh respectively","flag": false},
            {"id": 8,"section": "General","question": "Which left armer took the highest number of wickets in 2003 WC?","answer": "Chaminda Vaas","flag": false},
            {"id": 9,"section": "General","question": "Which cricketer scored 493 runs at an average of 124 in WC 2015?","answer": "Kumar Sangakkara ","flag": false},
            {"id": 10,"section": "General","question": "Who quoted “I have gone on my knees and begged him not to retire from ODI cricket?","answer": "Angelo Mathews after Sangakkara decided to retire from ODI cricket","flag": false},
            {"id": 11,"section": "General","question": "Who quoted “It’s like watching the matrix,He is neo of the matrix?","answer": "Dale Steyn On AB Devilliers","flag": false},
            {"id": 12,"section": "General","question": "How many players scored more than 500 runs in the 2015 WC?","answer": "2(Guptill & Sangakkara) ","flag": false},
            {"id": 13,"section": "General","question": "Which English bowler was thrashed for 6 boundaries in a single over in a test match by Chris Gayle?","answer": "Mathew Hoggard","flag": false},
            {"id": 14,"section": "General","question": "Who is the only player to score more than 50 runs in a QF SF & Final of a WC?","answer": "Steven Smith","flag": false},
            {"id": 15,"section": "General","question": "Identify His middle name is Aaron,he made his test debut in Brisbane His 50th test Wicket was Suresh Raina His best ODI figures came in Eden park against NZ in WC 2015?","answer": "Answer;Mitchell Aaron Starc ","flag": false}, 
            {"id": 16,"section": "General","question": "Identify He is the youngest one to play test cricket for his country with six test centuries","answer": "Answer;Daniel Vettori ","flag": false},
            {"id": 17,"section": "General","question": "Identify He is a WK batsman with 4 test centuries & 9 ODI wickets His final ODI was against India in Eden Park,Auckland in 2015 ?","answer": "Answer;Brendan Taylor ","flag": false}, 
            {"id": 18,"section": "General","question": "Which fast bowler who later went onto captain his country primarily played as a batsman in the 1983 WC?","answer": "Answer;Imran Khan fractured his shin before the WC and played primarily as a batsman","flag": false},
            {"id": 19,"section": "General","question": "In 1993 Hero cup final in which Sachin Tendulkar bowled the final over in which he defended 5 runs.How many wickets did he claim in that match?","answer": "Answer;Zero","flag": false},
            {"id": 20,"section": "General","question": "Which cricketer has the dubious distinction of being a part of both the 2016 IPL & 2016 WT20?","answer": "Chris Jordan ","flag": false},
            {"id": 21,"section": "General","question": "Who is the only Indian player to score a duck and a century on test debut?","answer": "Gundappa Viswanath ","flag": false},
            {"id": 22,"section": "General","question": "Who is only batsman to have been dismissed in hatricks in all the formats of the game?","answer": "Younus Khan ","flag": false},
            {"id": 23,"section": "General","question": "Which bowler has got max no of test wickets in a noball?","answer": "Morne morkel ","flag": false},
            {"id": 24,"section": "General","question": "Sachin and Dravid have scored , 7 centuries against England,but when they score 100s, whats most unique about them?","answer": "same number of matches(7),same number of innings(7),same Average (196.40),same Not out(2) and same no of runs(982) ","flag": false},
            {"id": 25,"section": "General","question": "Whats common about Gavaskar's 236*,Laxmans 200*. and Gangulys 239( of course they all came in India, but thats not the answer)?","answer": "They all scored 200 in their 99th match ","flag": false},
            {"id": 26,"section": "General","question": " Which two indian players have fielded for opposition in practise matches and who are they","answer": "sachin,Mandeep Singh ","flag": false},
            {"id": 27,"section": "General","question": " Who is the only bowler to take 5 wicket haul against all test playing nations","answer": "Dale Steyn ","flag": false},
            {"id": 28,"section": "General","question": " Which player holds the record of fastest 50 by an Indian","answer": "Ajit Agarkar","flag": false},
            {"id": 29,"section": "General","question": " Which Indian batsmanholds the record of highest test average","answer": "Vinod Kambli","flag": false},
            {"id": 30,"section": "General","question": " Garware Pavilion End and Tata End are the two ends of which Indian cricket stadium","answer": "Wankhede","flag": false},
    ]
}


const worldcupReducer= (state=initialState ,action)=>
{
switch(action.type)
{
    // case FETCH_DATA_REQUEST :
    //     return{
    //         ...state,
    //         isLoading : true
    //     }
    
    case FETCH_DATA_SUCCESS :
        return{
            state
            
           
        }
    default :
    return state
}
}

export default worldcupReducer