import java.util.Stack;

class Solution {
	public int solution(String arrangement) {
		int answer = 0;
				
		Stack<Character> stack = new Stack<>();

		for(int i=0; i<arrangement.length(); i++) {			
			char cc = arrangement.charAt(i);
			
			if(cc=='(') {
				stack.push(cc);
			} else if(cc==')' && arrangement.charAt(i-1)==')'){
				stack.pop();
				answer++;
			} else if(cc==')' && arrangement.charAt(i-1)=='('){
				stack.pop();
				answer+=stack.size();
			}
		}

		return answer;
	}
}
