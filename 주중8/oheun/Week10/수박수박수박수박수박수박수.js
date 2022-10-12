/* 
통과 여부 :  통과
시간 : 8분
점수 : +1

테스트 1 〉통과 (0.16ms, 33.5MB)
테스트 2 〉	통과 (0.43ms, 33.7MB)
테스트 3 〉	통과 (0.24ms, 33.5MB)
테스트 4 〉	통과 (0.35ms, 33.8MB)
테스트 5 〉	통과 (0.36ms, 33.6MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.06ms, 33.4MB)
테스트 8 〉	통과 (0.13ms, 33.5MB)
테스트 9 〉	통과 (0.13ms, 33.5MB)
테스트 10 〉통과 (0.12ms, 33.5MB)
테스트 11 〉통과 (0.13ms, 33.4MB)
테스트 12 〉통과 (0.12ms, 33.5MB)
테스트 13 〉통과 (0.15ms, 33.5MB)
테스트 14 〉통과 (0.20ms, 33.5MB)
테스트 15 〉통과 (0.80ms, 33.9MB)
테스트 16 〉통과 (0.07ms, 33.5MB)
*/


/**
* @param {*} n 길이 10,000이하인 자연수
* @returns 짝수면 수박수박 홀수면 수박수
*/
function solution(n) {
    /**
    * @param {*} 인덱스
    * @returns 짝수면 박 홀수면 수
    */
    function recursion(n) {
        return n%2? "박":"수"
    }
    let answer = "";
    for (let i = 0; i < n; i++){
        answer+=recursion(i);   
    }
    return answer;
}