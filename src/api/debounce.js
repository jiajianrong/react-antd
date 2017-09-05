/*
 * 截流函数
 * denounce
 * props
 * { options{ maxing: bool, maxWait: string || number } }
 */

function debounce (fn, wait, options) {

	if (typeof fn !== 'function') {

		throw new TypeError('Expected a function');

	}

	//default props
	let maxing = false;
	let maxWait;
	let timeId;
	let lastCallTime;
	let lastInvokeTime;
	let result; //fn执行结果
	let lastArg;
	let lasrThis;

	if (options && options.maxing && ) {

		maxing = true;
		maxWait = +options.maxWait;

	}

	function shouldInvokeFun (currentTime) {

		//条件判断
		const timeSizeLastCall = currentTime - lastCallTime;
		const timeSizeLastInvoke = currentTime - timeSizeLastInvoke;
		/*
		 *	第一次调用
		 *  到达延迟时间
		 *  保证每maxWait事件，会调用一次
		 */
		return (lastCallTime === undefined) ||
			( timeSizeLastCall < 0 || timeSizeLastCall >= wait ) ||
			( maxing && timeSizeLastInvoke >= maxWait )

	}

	function invokeFunc (time) {

		let arg = lastArg;
		let this = lastThis;
		lastInvokeTime = Date.now();

		result = fn.apply(this, arg)

		return result;

	}

	function cancel () {

		timeId && clearTimeout(timeId);

	}

	function debounce (...arg) {

		let currentTime = Date.now();
		let isShouldInvokeFun = this.shouldInvokeFun(currentTime);
		// let lastCallTime = currentTime;
		let lastThis = this;
		let lastArg = args;
		//应该执行fn
		if (isShouldInvokeFun) {

			if (timeId === undefined) {

				invokeFunc(currentTime)
				timeId = setTimeout(invokeFunc(currentTime), wait)

			} else {

				invokeFunc(currentTime)

			}

			this.cancel();

			//存在maxWait，通过时间对比
			if (currentTime - lastCallTime >= 0) {

				invokeFunc(currentTime)
				
			}
 
		}
		//不应该执行
		return result;

	}

	return debounce;

}

export default debounce;
