/*
	Напишите if..else, соответствующий следующему switch:

	switch (browser) {
		case 'Edge':
			alert( "You've got the Edge!" );
			break;

		case 'Chrome':
		case 'Firefox':
		case 'Safari':
		case 'Opera':
			alert( 'Okay we support these browsers too' );
			break;

		default:
			alert( 'We hope that this page looks ok!' );
	}
*/

const checkBrowserSupport = (browser) => {
  let answer;
  if (browser.toLowerCase() === 'edge') {
    answer = "You've got the Edge!";
    return answer;
  } else if (
    browser.toLowerCase() === 'chrome' ||
    browser.toLowerCase() === 'firefox' ||
    browser.toLowerCase() === 'safari' ||
    browser.toLowerCase() === 'opera'
  ) {
    answer = 'Okay we support these browsers too';
    return answer;
  } else {
    answer = 'We hope that this page looks ok!';
    return answer;
  }
};

console.log(browserSupport('opera'));
