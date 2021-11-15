(function() {
    /**
     * 1.set strs of limit are 200 and check length 
     * 2.compare firstStr to sceondStr then compare firstStr/secondStr to end
     * 3.check answer.length>0 or []
     * @param {string[]} strs  
     * @return {string}
     */
    const longestCommonPrefix = function(strs) {
        let strFirst = [];
        let strSecond = [];
        let strEnd = [];
        let answer = [];
        strFirst = strs[0].split('');
        strSecond = strs[1].split('');
        strEnd = strs[strs.length - 1].split('');
        for (let i = 0; i <= 200; i++) {
            if (strFirst.length > strSecond.length) {
                if (strSecond.length === i) {
                    break;
                }
            } else {
                if (strFirst.length === i) {
                    break;
                }
            }
            if (strFirst[i] === strSecond[i]) {
                if (strFirst[i] === strEnd[i]) {
                    answer.push(strFirst[i]);
                }
            } else {
                return "";
            }
        }
        if (answer.length > 0) {
            return answer.join("");
        }
    };
})()