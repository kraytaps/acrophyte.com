import React from "react";

export default function MomentusSvg({
	className,
	...props
}: {
	className?: string;
}) {
	return (
		<svg
			width="202"
			height="156"
			viewBox="0 0 202 156"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${className}`}
			{...props}
		>
			<g clipPath="url(#clip0_71_78)">
				<path
					d="M93.4977 52.8197C93.7163 52.8106 93.7163 52.8106 93.9393 52.8013C94.6073 52.9721 94.9688 53.3552 95.3672 53.9017C95.6949 54.5815 95.9387 55.2857 96.1843 55.9995C96.2562 56.202 96.3281 56.4044 96.4022 56.613C96.5532 57.0394 96.7028 57.4664 96.8512 57.8937C97.0788 58.5493 97.3104 59.2033 97.5428 59.8571C97.6891 60.272 97.8351 60.6869 97.9809 61.102C98.0501 61.2981 98.1193 61.4942 98.1906 61.6963C98.2535 61.8782 98.3165 62.06 98.3814 62.2474C98.4371 62.4074 98.4929 62.5674 98.5503 62.7322C98.6691 63.1476 98.6691 63.1476 98.6691 63.7377C100.015 63.7377 101.361 63.7377 102.748 63.7377C102.94 63.0886 103.133 62.4394 103.331 61.7705C103.548 61.1255 103.769 60.483 103.998 59.8417C104.06 59.6674 104.122 59.493 104.185 59.3133C104.316 58.9486 104.446 58.5839 104.577 58.2194C104.71 57.8473 104.842 57.475 104.973 57.1022C105.163 56.5597 105.357 56.0183 105.551 55.477C105.609 55.3108 105.667 55.1446 105.727 54.9734C106.035 54.1267 106.292 53.4849 107.021 52.9181C107.452 52.8136 107.452 52.8136 107.895 52.8197C108.041 52.8177 108.187 52.8157 108.338 52.8136C108.972 52.9674 109.151 53.1711 109.546 53.705C109.847 54.3734 110.077 55.0631 110.311 55.7582C110.42 56.0719 110.42 56.0719 110.531 56.3919C110.788 57.1347 111.041 57.8787 111.294 58.623C111.681 59.7619 112.07 60.9005 112.46 62.0383C112.628 62.5286 112.793 63.0196 112.959 63.5106C113.063 63.8154 113.167 64.1201 113.271 64.4247C113.318 64.5653 113.365 64.7059 113.413 64.8507C113.821 66.0324 114.264 66.4269 115.301 67.063C119.551 69.6769 122.282 73.6213 123.537 78.4726C124.044 80.5774 124.172 82.6255 124.113 84.7869C121.823 85.9467 117.597 84.7972 115.179 84.3935C115.134 84.5791 115.089 84.7647 115.043 84.956C113.899 89.5684 111.7 93.8322 107.604 96.3935C104.34 98.2258 100.624 98.8281 96.9696 97.8443C93.0349 96.4776 89.846 93.4726 87.9945 89.7212C87.2219 88.012 86.7076 86.2078 86.2383 84.3935C86.1089 84.4196 85.9794 84.4457 85.8461 84.4726C83.7877 84.8721 81.8007 85.0011 79.7073 85.0082C79.5136 85.0092 79.3198 85.0101 79.1202 85.011C78.9389 85.0106 78.7576 85.0102 78.5708 85.0098C78.3242 85.0094 78.3242 85.0094 78.0726 85.0091C77.6922 84.9836 77.6922 84.9836 77.4979 84.7869C77.1839 79.6615 78.4912 74.8105 81.771 70.8197C81.8624 70.7008 81.9538 70.5818 82.0479 70.4593C82.9803 69.2809 84.1465 68.2016 85.5126 67.5809C87.3037 66.7056 87.9381 65.6562 88.5941 63.7708C88.8977 62.8588 89.1781 61.941 89.4553 61.0205C89.6745 60.3264 89.8965 59.6332 90.1186 58.9401C90.255 58.511 90.3892 58.0812 90.5208 57.6506C91.9994 52.8404 91.9994 52.8404 93.4977 52.8197ZM92.0167 70.5615C89.4077 73.3715 87.9598 77.1051 87.95 80.9509C87.959 81.2461 87.9697 81.5413 87.9864 81.8361C91.7126 80.57 94.6384 78.2556 96.5326 74.7541C96.636 74.566 96.7394 74.3778 96.8459 74.184C97.9642 72.0424 98.8633 69.5319 98.8633 67.082C96.2616 67.082 93.8561 68.8458 92.0167 70.5615ZM102.554 67.082C103.346 72.0456 105.084 76.5208 109.158 79.6722C110.493 80.5715 111.9 81.34 113.431 81.8361C113.64 78.1146 112.707 74.5327 110.308 71.635C110.185 71.4958 110.061 71.3566 109.934 71.2132C109.726 70.9709 109.726 70.9709 109.513 70.7237C107.962 69.0321 105.809 67.5235 103.525 67.082C103.201 67.0745 102.877 67.0729 102.554 67.082ZM84.3203 71.2869C81.7971 73.9873 79.9608 78.1621 80.0108 81.9099C80.0126 82.0818 80.0143 82.2537 80.0161 82.4309C80.0184 82.5592 80.0206 82.6875 80.0229 82.8197C82.1396 82.8605 84.1545 82.8507 86.2383 82.4263C86.2401 82.3127 86.242 82.1991 86.2438 82.0821C86.3488 76.8208 87.5047 72.3755 90.8999 68.2623C91.0959 68.0014 91.2907 67.7395 91.4826 67.4755C88.84 67.4755 86.1481 69.5389 84.3203 71.2869ZM109.934 67.4755C110.091 67.6499 110.247 67.8244 110.408 68.0041C113.973 72.2463 115.086 76.9669 115.373 82.4263C117.442 82.9034 119.478 82.8577 121.588 82.8197C121.197 78.0973 119.931 74.1794 116.538 70.8197C116.415 70.6889 116.292 70.558 116.166 70.4232C114.698 68.9665 112.007 67.4755 109.934 67.4755ZM100.611 68.6558C100.555 68.8936 100.498 69.1315 100.44 69.3766C99.2512 74.2404 97.1378 78.6594 92.8422 81.4427C91.4188 82.2993 89.9659 83.1224 88.3749 83.6066C88.4291 86.681 90.3087 89.4622 92.3202 91.623C95.0069 94.2279 98.1391 95.1247 101.758 95.071C104.748 94.9587 107.431 93.3415 109.546 91.2787C111.439 89.1194 112.698 86.6387 113.236 83.8033C113.053 83.7199 112.87 83.6365 112.681 83.5505C107.942 81.3703 104.128 78.369 102.185 73.3181C101.635 71.7867 101.183 70.2394 100.806 68.6558C100.742 68.6558 100.677 68.6558 100.611 68.6558Z"
					fill="currentColor"
				/>
				<path
					d="M109.817 3.66067C112.858 6.4501 114.213 10.0471 115.179 13.9672C115.285 13.9493 115.391 13.9314 115.5 13.913C118.278 13.4568 121.101 13.1318 123.919 13.377C124.277 13.7389 124.147 14.3054 124.15 14.7909C124.1 19.8081 122.466 24.3269 119.258 28.1311C119.146 28.2637 119.035 28.3963 118.921 28.533C116.2 31.514 111.997 33.2751 108.139 34.0451C107.966 34.0799 107.792 34.1146 107.613 34.1504C107.482 34.1765 107.351 34.2026 107.215 34.2295C106.833 35.4906 106.451 36.7518 106.07 38.0131C105.868 38.6782 105.667 39.3433 105.465 40.0083C104.882 41.9321 104.301 43.8559 103.746 45.7884C103.707 45.9269 103.667 46.0654 103.625 46.2081C103.446 46.8294 103.269 47.4512 103.096 48.0742C103.034 48.2881 102.973 48.5019 102.91 48.7223C102.859 48.903 102.808 49.0838 102.756 49.27C102.516 49.8646 102.201 50.2792 101.777 50.754C101.395 50.9139 101.395 50.9139 101.012 50.9508C100.886 50.967 100.76 50.9832 100.63 50.9999C100.053 50.9302 99.7228 50.7034 99.2518 50.3606C99.0107 49.9063 99.0107 49.9063 98.8447 49.3781C98.7822 49.1849 98.7198 48.9918 98.6554 48.7927C98.5959 48.596 98.5363 48.3993 98.4749 48.1967C98.3904 47.9302 98.3904 47.9302 98.3042 47.6584C98.1325 47.1119 97.9669 46.5639 97.8027 46.0151C97.7419 45.8135 97.6811 45.6119 97.6184 45.4043C97.4259 44.7656 97.2342 44.1266 97.0425 43.4877C96.9156 43.0664 96.7886 42.6452 96.6616 42.2239C96.1762 40.6124 95.6913 39.0008 95.2161 37.3861C95.1623 37.2036 95.1085 37.0211 95.0531 36.833C94.9525 36.4906 94.8521 36.1481 94.7521 35.8055C94.5224 35.0001 94.5224 35.0001 94.2018 34.2295C93.7201 34.1031 93.2445 33.9968 92.7573 33.8975C87.7055 32.7648 83.2588 30.2047 80.3993 25.7343C78.1215 21.9608 77.2744 17.9723 77.498 13.5737C77.8748 13.1921 78.5554 13.3438 79.0614 13.3397C79.2505 13.3398 79.4397 13.34 79.6345 13.3401C79.9226 13.3401 79.9226 13.3401 80.2164 13.3402C82.2461 13.3559 84.2508 13.5383 86.2384 13.9672C86.2666 13.8624 86.2948 13.7576 86.3238 13.6497C87.66 8.74997 89.8181 4.36681 94.3286 1.72203C99.5956 -1.07287 105.348 -0.24928 109.817 3.66067ZM96.1442 4.1311C95.8741 4.2494 95.8741 4.2494 95.5986 4.37008C92.308 6.00105 90.0939 9.02446 88.7634 12.3934C88.4995 13.2082 88.3235 13.8953 88.3749 14.754C88.6532 14.8579 88.6532 14.8579 88.9371 14.9638C90.5588 15.5843 92.0126 16.275 93.4249 17.3114C93.6002 17.4382 93.7754 17.565 93.956 17.6956C97.7186 20.6022 99.7315 25.0868 100.611 29.7049C100.996 29.1212 101.136 28.6371 101.3 27.9635C102.359 23.6314 104.81 19.35 108.605 16.9188C110.098 16.0199 111.646 15.2636 113.236 14.5573C112.598 10.9986 110.755 7.83017 107.919 5.6188C104.456 3.24504 100.071 2.38576 96.1442 4.1311ZM80.023 15.5409C79.9841 16.7971 80.0471 17.9367 80.3508 19.1557C80.3856 19.2994 80.4204 19.4431 80.4563 19.5911C80.7761 20.8553 81.2116 22.0365 81.7711 23.2131C81.8522 23.3921 81.9333 23.5711 82.0169 23.7556C83.5477 26.8832 86.3729 29.2001 89.5403 30.4918C90.1842 30.6695 90.8209 30.7992 91.4826 30.8852C91.3169 30.6596 91.151 30.4343 90.9849 30.209C90.878 30.0629 90.7711 29.9168 90.6609 29.7663C90.4457 29.4814 90.2235 29.2016 89.9917 28.9303C87.4619 25.9144 86.4735 21.8896 86.3234 18.0245C86.315 17.8234 86.3066 17.6224 86.2979 17.4152C86.2774 16.9216 86.2576 16.428 86.2384 15.9344C84.1584 15.483 82.1418 15.5028 80.023 15.5409ZM115.373 15.9344C115.363 16.1195 115.363 16.1195 115.353 16.3085C115.019 22.0608 113.699 26.4767 109.935 30.8852C113.206 30.5194 116.002 28.4538 118.092 25.9672C120.274 22.8853 121.447 19.3202 121.588 15.5409C119.47 15.5028 117.453 15.483 115.373 15.9344ZM87.9865 16.5245C87.7563 20.5996 89.0747 24.2639 91.6768 27.3442C91.7863 27.4748 91.8957 27.6054 92.0084 27.74C93.6483 29.5383 95.7771 30.6517 98.0865 31.2786C98.3428 31.2786 98.5992 31.2786 98.8634 31.2786C98.5318 26.4926 96.387 22.4906 92.9758 19.2418C91.501 17.954 89.8549 17.0607 87.9865 16.5245ZM107.798 19.8688C107.633 20.0281 107.468 20.1873 107.298 20.3514C104.377 23.3783 103.206 27.1892 102.554 31.2786C105.822 30.9409 108.415 29.0513 110.517 26.5573C112.731 23.5009 113.526 20.2512 113.431 16.5245C111.571 16.5245 109.027 18.6689 107.798 19.8688Z"
					fill="currentColor"
				/>
				<path
					d="M63.1248 25.5738C68.774 25.3408 73.7903 26.8081 78.0669 30.6947C82.6834 35.0932 84.0331 41.8464 84.296 48C84.4314 53.9468 83.6247 60.4096 80.0229 65.3115C79.8839 65.5024 79.745 65.6934 79.6018 65.8901C76.6322 69.7318 72.2095 72.0215 67.47 72.7339C66.0247 72.8509 64.5733 72.8145 63.1248 72.7869C63.1151 71.9336 63.1081 71.0803 63.1035 70.227C63.1015 69.9378 63.0989 69.6486 63.0955 69.3594C63.0465 65.0767 63.0465 65.0767 63.7075 63.7377C63.4962 63.6923 63.2849 63.6469 63.0671 63.6002C58.6417 62.6191 54.697 60.4965 52.0407 56.6757C50.1085 53.5366 49.3918 50.0462 50.0446 46.394C50.964 42.5167 53.4054 39.2918 56.7152 37.1803C58.8604 35.8989 61.2056 34.8587 63.7075 34.623C63.6174 34.3308 63.6174 34.3308 63.5254 34.0328C62.9771 32.2556 63.1017 30.3631 63.1127 28.5246C63.1136 28.238 63.1145 27.9513 63.1153 27.6647C63.1174 26.9677 63.1208 26.2707 63.1248 25.5738ZM65.2613 28.1311C65.2132 30.1945 65.2681 32.1952 65.6498 34.2295C66.0445 34.6293 66.8641 34.4803 67.41 34.5C72.3893 34.7429 76.8365 36.3285 80.4113 39.9344C80.6733 39.514 80.6733 39.514 80.4311 38.9109C78.9802 34.7484 76.5432 31.7961 72.6345 29.7964C70.3187 28.7627 67.7953 28.0869 65.2613 28.1311ZM66.4267 36.3934C67.1809 38.9821 68.4557 40.8064 70.3113 42.6885C70.5033 42.8863 70.5033 42.8863 70.699 43.0881C73.2873 45.5687 77.4373 47.2647 80.994 47.2131C80.1356 43.5625 78.2764 40.6849 75.1671 38.5574C72.3731 36.878 69.6446 36.2393 66.4267 36.3934ZM56.521 40.5246C54.1934 42.9776 52.9176 46.1485 52.9428 49.5454C53.0692 53.0705 54.6931 56.0313 57.1499 58.4631C59.0407 60.111 61.9379 61.7705 64.4844 61.7705C64.5623 61.5752 64.6401 61.38 64.7204 61.1788C66.6783 56.3921 69.6551 52.8674 74.3902 50.7541C75.8998 50.1415 77.4554 49.6891 79.0517 49.377C79.0517 49.2472 79.0517 49.1174 79.0517 48.9836C78.8679 48.9451 78.6842 48.9065 78.4948 48.8668C75.3093 48.1551 72.5062 46.8735 69.9229 44.8525C69.7902 44.7518 69.6575 44.6511 69.5208 44.5474C67.0636 42.5665 65.5799 39.5028 64.4844 36.5902C61.5209 36.5902 58.5998 38.5278 56.521 40.5246ZM69.2309 56.6903C68.1186 57.9956 66.4267 60.1735 66.4267 61.9672C70.2347 62.1497 73.7083 61.2078 76.6618 58.6529C78.9532 56.4855 80.2732 54.2127 80.994 51.1475C76.6026 50.9743 72.1649 53.5934 69.2309 56.6903ZM79.5859 59.2131C76.2271 62.2951 71.9609 63.6266 67.5071 63.8484C67.2662 63.8611 67.2662 63.8611 67.0204 63.8741C66.6283 63.8948 66.2362 63.9147 65.844 63.9344C65.2287 66.0448 65.2376 68.0531 65.2613 70.2295C69.8258 70.087 74.101 68.4843 77.3036 65.1148C79.0254 63.0816 79.9969 61.0173 80.6056 58.4262C80.2127 58.4262 79.8465 58.9611 79.5859 59.2131Z"
					fill="currentColor"
				/>
				<path
					d="M138.292 25.5738C138.331 28.0798 138.367 30.546 137.989 33.0277C137.913 33.5706 137.887 34.076 137.904 34.623C138.087 34.6684 138.27 34.7138 138.459 34.7605C143.16 35.9555 147.102 38.2988 149.752 42.4918C151.585 45.846 151.881 49.4576 150.917 53.1148C149.726 56.9948 146.883 59.9317 143.391 61.7966C141.633 62.7068 139.85 63.3666 137.904 63.7377C137.932 64.0574 137.96 64.3771 137.989 64.6968C138.012 64.9638 138.012 64.9638 138.037 65.2362C138.07 65.5996 138.105 65.9628 138.148 66.3252C138.303 67.7031 138.315 69.0651 138.304 70.4509C138.303 70.6766 138.303 70.9022 138.302 71.1348C138.299 71.6855 138.296 72.2362 138.292 72.7869C133.035 73.0184 127.925 71.6801 123.919 68.0656C123.774 67.937 123.629 67.8085 123.479 67.676C119.446 63.8696 117.666 57.9583 117.315 52.5246C117.279 51.4549 117.268 50.386 117.267 49.3156C117.267 49.1678 117.266 49.0201 117.266 48.8678C117.268 46.4405 117.399 44.0865 117.898 41.705C117.926 41.5702 117.954 41.4355 117.983 41.2966C118.779 37.6436 120.309 34.2965 122.754 31.4754C122.883 31.3258 123.012 31.1762 123.145 31.0221C127.082 26.7538 132.752 25.4681 138.292 25.5738ZM124.076 33.2928C122.564 35.0758 121.336 37.3972 121.006 39.7377C121.095 39.6685 121.185 39.5993 121.277 39.528C121.703 39.2018 122.131 38.8794 122.559 38.5574C122.705 38.4463 122.85 38.3353 123 38.2208C126.896 35.3327 131.061 34.6157 135.767 34.4263C136.269 32.3419 136.194 30.2618 136.156 28.1312C131.629 28.025 127.217 30.0435 124.076 33.2928ZM123.491 40.9772C121.996 42.7435 120.877 44.8833 120.617 47.2132C124.83 47.1137 129.218 44.9167 132.113 41.8771C133.49 40.2803 134.546 38.4151 135.184 36.3935C130.69 36.1781 126.638 37.6491 123.491 40.9772ZM137.127 36.5902C137 36.8755 137 36.8755 136.87 37.1665C134.579 42.2634 131.336 45.9801 126.056 48C124.904 48.3801 123.734 48.6879 122.559 48.9836C122.559 49.1135 122.559 49.2433 122.559 49.3771C122.664 49.4025 122.768 49.428 122.875 49.4542C127.878 50.7075 132.171 52.9631 135.015 57.4795C135.825 58.86 136.486 60.3033 137.127 61.7705C140.47 61.2686 143.517 59.4966 145.673 56.8525C147.685 54.0791 148.692 50.9588 148.271 47.5082C147.653 44.0684 145.896 41.1132 143.09 39.0592C141.262 37.7853 139.352 36.8609 137.127 36.5902ZM120.617 51.1476C120.959 54.2096 122.736 56.8758 125 58.8566C128.031 61.1716 131.419 62.1476 135.184 61.9673C133.685 57.7043 131.014 54.7484 127.003 52.7705C125.084 51.8726 122.751 51.0335 120.617 51.1476ZM121.006 58.623C121.473 61.9352 123.553 64.9481 126.148 66.9299C129.189 69.0944 132.461 70.069 136.156 70.2295C136.248 67.0566 136.248 67.0566 135.767 63.9345C135.422 63.9234 135.422 63.9234 135.069 63.9122C129.839 63.7123 125.63 62.4489 121.597 58.955C121.261 58.6021 121.261 58.6021 121.006 58.623Z"
					fill="currentColor"
				/>
				<path
					d="M61.377 109.18C62.8512 109.18 64.3254 109.18 65.8443 109.18C67.1498 111.651 68.3983 114.147 69.6318 116.656C70.7828 118.996 71.9349 121.334 73.1576 123.637C73.5142 124.31 73.8691 124.985 74.2241 125.659C74.2962 125.796 74.3683 125.933 74.4426 126.074C74.6194 126.41 74.7963 126.746 74.9731 127.082C75.0822 126.861 75.1912 126.639 75.3036 126.411C76.3293 124.329 77.3554 122.248 78.3819 120.167C78.9096 119.097 79.4372 118.027 79.9645 116.956C80.473 115.924 80.9818 114.892 81.4909 113.861C81.6855 113.466 81.8799 113.071 82.0743 112.677C82.3455 112.126 82.6173 111.575 82.8891 111.025C83.0106 110.777 83.0106 110.777 83.1346 110.525C83.6913 109.399 83.6913 109.399 83.9077 109.18C85.2537 109.18 86.5998 109.18 87.9866 109.18C87.9866 117.1 87.9866 125.02 87.9866 133.18C86.6405 133.18 85.2945 133.18 83.9077 133.18C83.8116 123.832 83.8116 123.832 83.7135 114.295C80.6369 120.527 77.5603 126.759 74.3904 133.18C74.0058 133.18 73.6213 133.18 73.225 133.18C73.1734 133.075 73.1217 132.97 73.0685 132.862C72.5205 131.747 71.972 130.633 71.4231 129.519C71.2195 129.106 71.0161 128.693 70.8129 128.279C69.7252 126.067 68.6277 123.862 67.4853 121.678C66.7834 120.336 66.1023 118.985 65.4315 117.627C65.3199 117.403 65.2082 117.179 65.0931 116.949C64.988 116.736 64.8828 116.524 64.7745 116.305C64.6811 116.116 64.5876 115.928 64.4914 115.734C64.2904 115.279 64.2904 115.279 64.2904 114.885C64.1622 114.885 64.034 114.885 63.902 114.885C63.7738 114.69 63.6456 114.496 63.5135 114.295C63.4494 120.527 63.3853 126.759 63.3193 133.18C62.6783 133.18 62.0373 133.18 61.377 133.18C61.377 125.26 61.377 117.34 61.377 109.18Z"
					fill="currentColor"
				/>
				<path
					d="M0 109.18C1.28192 109.18 2.56385 109.18 3.88462 109.18C5.37903 112.032 6.81739 114.907 8.23451 117.799C9.62793 120.64 11.0317 123.477 12.5557 126.249C12.6418 126.406 12.7279 126.563 12.8167 126.724C12.8816 126.842 12.9465 126.96 13.0135 127.082C13.1225 126.861 13.2316 126.639 13.344 126.411C14.3696 124.329 15.3957 122.248 16.4222 120.167C16.95 119.097 17.4776 118.027 18.0049 116.956C18.5133 115.924 19.0222 114.892 19.5312 113.861C19.7258 113.466 19.9203 113.071 20.1146 112.677C20.3859 112.126 20.6576 111.575 20.9295 111.025C21.051 110.777 21.051 110.777 21.175 110.525C21.7317 109.399 21.7317 109.399 21.9481 109.18C23.2941 109.18 24.6401 109.18 26.0269 109.18C26.0269 117.1 26.0269 125.02 26.0269 133.18C24.6809 133.18 23.3349 133.18 21.9481 133.18C21.8519 123.832 21.8519 123.832 21.7538 114.295C18.6772 120.527 15.6006 126.759 12.4308 133.18C12.0462 133.18 11.6616 133.18 11.2654 133.18C11.1579 132.962 11.0504 132.743 10.9396 132.517C10.531 131.686 10.1217 130.855 9.71239 130.024C9.53711 129.668 9.36197 129.312 9.18698 128.955C8.19097 126.928 7.17967 124.911 6.1329 122.911C5.36713 121.444 4.6349 119.962 3.90889 118.475C3.66304 117.972 3.41662 117.469 3.16991 116.966C3.06428 116.75 2.95865 116.534 2.84982 116.311C2.50262 115.628 2.1243 114.962 1.74808 114.295C1.68398 120.527 1.61988 126.759 1.55385 133.18C1.04108 133.18 0.528308 133.18 0 133.18C0 125.26 0 117.34 0 109.18Z"
					fill="currentColor"
				/>
				<path
					d="M43.0411 108.559C47.0355 108.433 50.6267 109.849 53.5713 112.574C56.1726 115.412 56.8568 118.781 56.7402 122.5C56.5665 125.662 54.8608 128.329 52.6366 130.426C50.058 132.643 47.1772 133.685 43.8112 133.648C43.6088 133.65 43.4064 133.652 43.1978 133.654C39.8241 133.642 36.8463 132.348 34.3789 130.033C34.1761 129.843 34.1761 129.843 33.9692 129.65C31.74 127.349 30.7203 124.176 30.6035 121.008C30.6912 117.567 32.0238 114.607 34.3789 112.131C36.8585 109.952 39.7803 108.762 43.0411 108.559ZM38.8462 111.738C38.7245 111.837 38.6028 111.936 38.4774 112.037C36.5559 113.78 35.8323 116.505 35.5443 119.016C35.3315 122.917 35.6198 126.899 38.2301 129.995C39.5886 131.383 41.2751 132.254 43.2153 132.299C43.4322 132.297 43.4322 132.297 43.6534 132.295C43.8057 132.294 43.958 132.293 44.115 132.292C46.0046 132.233 47.6157 131.58 48.9841 130.24C51.8262 126.963 52.1008 122.796 51.8596 118.623C51.5551 116.019 50.5557 113.517 48.6397 111.719C45.7161 109.389 41.741 109.349 38.8462 111.738Z"
					fill="currentColor"
				/>
				<path
					d="M114.402 109.18C116.733 109.18 116.733 109.18 117.295 109.512C117.418 109.662 117.541 109.813 117.667 109.967C117.807 110.13 117.946 110.292 118.09 110.46C118.283 110.703 118.283 110.703 118.481 110.951C118.707 111.21 118.933 111.468 119.161 111.725C119.269 111.853 119.378 111.982 119.49 112.113C120.176 112.918 120.885 113.703 121.588 114.492C122.025 114.983 122.461 115.474 122.898 115.966C123.194 116.299 123.491 116.632 123.787 116.965C124.443 117.701 125.098 118.439 125.74 119.188C126.411 119.969 127.102 120.729 127.794 121.49C128.294 122.041 128.788 122.595 129.273 123.16C130.128 124.152 131.008 125.123 131.883 126.098C131.947 120.515 132.011 114.932 132.077 109.18C132.718 109.18 133.359 109.18 134.019 109.18C134.019 117.23 134.019 125.28 134.019 133.574C132.66 133.574 132.66 133.574 132.301 133.334C132.214 133.223 132.126 133.112 132.036 132.997C131.885 132.813 131.885 132.813 131.731 132.625C131.629 132.491 131.527 132.358 131.421 132.221C131.2 131.948 130.979 131.675 130.758 131.402C130.652 131.268 130.545 131.134 130.436 130.996C130.045 130.511 129.631 130.05 129.212 129.59C128.635 128.947 128.087 128.288 127.549 127.611C126.793 126.664 125.992 125.774 125.171 124.886C124.409 124.058 123.702 123.194 123.002 122.311C122.517 121.719 122.008 121.153 121.491 120.59C120.816 119.856 120.17 119.11 119.549 118.328C118.591 117.141 117.561 116.015 116.538 114.885C116.474 120.923 116.41 126.96 116.344 133.18C115.703 133.18 115.062 133.18 114.402 133.18C114.402 125.26 114.402 117.34 114.402 109.18Z"
					fill="currentColor"
				/>
				<path
					d="M199.232 110.496C200.376 111.561 201.155 112.912 201.223 114.492C200.945 114.629 200.666 114.764 200.385 114.898C200.23 114.973 200.075 115.048 199.914 115.126C199.475 115.279 199.475 115.279 198.892 115.082C198.635 114.595 198.635 114.595 198.37 113.975C197.701 112.565 196.87 111.632 195.457 110.975C193.722 110.379 192.024 110.324 190.346 111.148C189.512 111.809 189.106 112.485 188.792 113.508C188.773 114.558 189.093 115.253 189.735 116.048C191.333 117.623 193.508 118.579 195.468 119.602C200.608 122.303 200.608 122.303 201.691 124.821C202.066 126.426 202.074 128.375 201.287 129.845C200.009 131.749 198.491 133.036 196.223 133.51C195.292 133.646 194.357 133.654 193.417 133.66C193.221 133.662 193.025 133.664 192.823 133.666C190.588 133.64 188.606 133.009 186.899 131.504C185.987 130.518 185.463 129.28 184.908 128.066C185.43 127.537 185.97 127.346 186.656 127.082C186.912 127.082 187.169 127.082 187.433 127.082C187.499 127.236 187.565 127.391 187.633 127.55C188.525 129.508 189.515 130.661 191.507 131.467C193.165 132.057 194.764 131.893 196.367 131.213C197.242 130.689 197.771 130.019 198.115 129.049C198.267 127.866 197.989 127.058 197.338 126.098C196.171 124.844 194.834 124.038 193.332 123.258C192.919 123.037 192.506 122.815 192.093 122.593C191.894 122.486 191.695 122.38 191.489 122.27C186.773 119.724 186.773 119.724 185.655 117.241C185.2 115.625 185.201 113.615 186.013 112.121C186.097 111.995 186.181 111.868 186.267 111.738C186.402 111.533 186.402 111.533 186.54 111.323C187.761 109.711 189.616 108.915 191.568 108.638C194.36 108.385 196.964 108.721 199.232 110.496Z"
					fill="currentColor"
				/>
				<path
					d="M161.406 109.18C162.816 109.18 164.226 109.18 165.679 109.18C165.681 109.688 165.682 110.197 165.684 110.72C165.691 112.404 165.702 114.089 165.714 115.773C165.722 116.793 165.728 117.814 165.731 118.834C165.734 119.82 165.741 120.806 165.75 121.792C165.753 122.167 165.755 122.542 165.755 122.917C165.725 125.69 165.725 125.69 166.65 128.262C166.762 128.469 166.874 128.676 166.99 128.889C168.231 130.461 169.604 131.286 171.53 131.754C173.789 131.953 175.645 131.576 177.527 130.229C179.165 128.626 179.798 126.606 179.888 124.344C179.892 124.061 179.895 123.779 179.897 123.496C179.899 123.34 179.901 123.184 179.903 123.024C179.909 122.514 179.914 122.004 179.919 121.495C179.923 121.139 179.927 120.784 179.931 120.429C179.942 119.497 179.952 118.565 179.961 117.634C179.971 116.681 179.982 115.729 179.992 114.777C180.013 112.912 180.033 111.046 180.052 109.18C180.693 109.18 181.334 109.18 181.994 109.18C182.003 111.214 182.01 113.247 182.014 115.281C182.016 116.225 182.019 117.169 182.023 118.114C182.028 119.027 182.03 119.94 182.031 120.854C182.032 121.2 182.033 121.547 182.035 121.893C182.055 125.216 181.998 128.533 179.614 131.111C176.597 133.77 172.759 133.787 168.981 133.574C166.667 133.291 164.566 131.917 163.099 130.12C161.293 127.518 161.349 124.617 161.368 121.571C161.368 121.213 161.369 120.854 161.369 120.496C161.371 119.559 161.375 118.622 161.379 117.685C161.383 116.726 161.385 115.768 161.387 114.809C161.391 112.933 161.398 111.056 161.406 109.18Z"
					fill="currentColor"
				/>
				<path
					d="M93.6194 109.18C99.0676 109.18 104.516 109.18 110.129 109.18C110.129 109.765 110.129 110.349 110.129 110.951C106.091 110.951 102.053 110.951 97.8925 110.951C97.8925 113.677 97.8925 116.404 97.8925 119.213C100.584 119.213 103.277 119.213 106.05 119.213C106.05 119.797 106.05 120.382 106.05 120.984C103.358 120.984 100.666 120.984 97.8925 120.984C97.8925 124.424 97.8925 127.865 97.8925 131.41C101.931 131.41 105.969 131.41 110.129 131.41C110.129 131.994 110.129 132.578 110.129 133.18C108.005 133.185 105.881 133.188 103.757 133.19C102.771 133.192 101.785 133.193 100.799 133.195C99.8481 133.197 98.8973 133.198 97.9465 133.199C97.5829 133.199 97.2193 133.2 96.8557 133.201C96.3482 133.203 95.8408 133.203 95.3334 133.203C95.1815 133.203 95.0296 133.204 94.8732 133.205C93.8358 133.203 93.8358 133.203 93.6194 132.984C93.6008 132.675 93.5957 132.365 93.596 132.056C93.5956 131.755 93.5956 131.755 93.5952 131.449C93.5959 131.227 93.5966 131.005 93.5973 130.776C93.5973 130.544 93.5973 130.312 93.5972 130.073C93.5974 129.434 93.5983 128.796 93.5997 128.157C93.6009 127.49 93.601 126.824 93.6012 126.157C93.6019 124.894 93.6034 123.631 93.6054 122.368C93.6078 120.789 93.6088 119.211 93.6099 117.632C93.6118 114.815 93.6157 111.998 93.6194 109.18Z"
					fill="currentColor"
				/>
				<path
					d="M137.321 109.18C144.308 109.18 151.294 109.18 158.492 109.18C158.492 109.765 158.492 110.349 158.492 110.951C155.672 110.951 152.852 110.951 149.946 110.951C149.946 118.287 149.946 125.622 149.946 133.18C148.6 133.18 147.254 133.18 145.867 133.18C145.867 125.845 145.867 118.509 145.867 110.951C143.047 110.951 140.227 110.951 137.321 110.951C137.321 110.367 137.321 109.782 137.321 109.18Z"
					fill="currentColor"
				/>
				<path
					d="M153.6 144.344C155.095 145.436 155.64 146.707 155.967 148.525C156.19 150.388 155.638 152.118 154.567 153.632C153.346 155.04 151.689 155.705 149.876 155.859C147.648 155.918 145.785 155.604 144.119 154.033C142.848 152.676 142.494 151.016 142.524 149.198C142.675 147.449 143.393 145.788 144.716 144.632C147.379 142.721 150.809 142.608 153.6 144.344ZM146.802 145.598C145.489 147.284 145.528 149.225 145.673 151.279C145.854 152.563 146.367 153.363 147.374 154.166C148.23 154.677 149.016 154.729 149.979 154.541C150.938 154.24 151.577 153.739 152.082 152.852C152.994 151.064 153.172 149.107 152.724 147.147C152.267 145.842 151.647 145.185 150.444 144.529C148.951 144.123 147.846 144.475 146.802 145.598Z"
					fill="currentColor"
				/>
				<path
					d="M38.769 144.34C40.0074 145.364 40.6686 146.551 40.9829 148.131C41.1544 150.207 40.9073 152.022 39.6233 153.701C38.473 154.929 36.7754 155.725 35.1143 155.85C33.0618 155.892 31.08 155.737 29.4141 154.377C28.2579 153.231 27.7513 151.864 27.7297 150.242C27.7287 150.085 27.7277 149.928 27.7267 149.766C27.7227 149.613 27.7187 149.46 27.7145 149.303C27.702 147.401 28.3327 146.215 29.6121 144.841C32.0361 142.646 36.0954 142.539 38.769 144.34ZM31.8055 145.635C30.7049 147.347 30.5292 149.084 30.6887 151.082C30.918 152.141 31.2172 153.113 32.0362 153.848C33.0706 154.511 33.7083 154.708 34.9208 154.532C35.9899 154.268 36.7025 153.562 37.2925 152.656C37.7897 151.509 37.9769 150.572 37.9602 149.324C37.9586 149.168 37.957 149.013 37.9553 148.853C37.9162 147.484 37.713 146.433 36.7645 145.411C35.8972 144.614 35.2194 144.32 34.0149 144.338C33.0938 144.462 32.4468 144.968 31.8055 145.635Z"
					fill="currentColor"
				/>
				<path
					d="M13.7905 143.41C14.752 143.41 15.7134 143.41 16.704 143.41C16.704 144.968 16.704 146.526 16.704 148.131C18.3705 148.131 20.037 148.131 21.754 148.131C21.6899 147.807 21.6258 147.482 21.5598 147.147C21.545 146.843 21.5387 146.538 21.5408 146.234C21.5414 146.068 21.542 145.903 21.5427 145.732C21.5451 145.477 21.5451 145.477 21.5476 145.217C21.5485 145.043 21.5494 144.87 21.5503 144.69C21.5526 144.264 21.556 143.837 21.5598 143.41C22.5212 143.41 23.4826 143.41 24.4732 143.41C24.4732 147.435 24.4732 151.46 24.4732 155.607C23.5118 155.607 22.5503 155.607 21.5598 155.607C21.5544 155.025 21.5506 154.443 21.5476 153.861C21.546 153.699 21.5444 153.537 21.5427 153.37C21.5421 153.208 21.5414 153.046 21.5408 152.879C21.5398 152.732 21.5388 152.586 21.5377 152.435C21.5707 151.588 21.6707 150.745 21.754 149.902C20.1516 149.902 18.5492 149.902 16.8982 149.902C16.8341 151.784 16.77 153.667 16.704 155.607C15.7425 155.607 14.7811 155.607 13.7905 155.607C13.7905 151.582 13.7905 147.557 13.7905 143.41Z"
					fill="currentColor"
				/>
				<path
					d="M159.075 143.41C164.708 143.41 164.708 143.41 166.262 144C167.185 144.983 167.304 145.662 167.285 146.985C167.203 147.856 167.007 148.234 166.456 148.918C165.958 149.241 165.452 149.487 164.902 149.705C165.772 151.285 166.669 152.834 167.661 154.339C168.204 155.172 168.204 155.172 168.204 155.607C167.114 155.607 166.025 155.607 164.902 155.607C164.005 153.984 163.107 152.361 162.183 150.688C162.119 152.311 162.055 153.934 161.989 155.607C161.027 155.607 160.066 155.607 159.075 155.607C159.075 151.582 159.075 147.557 159.075 143.41ZM161.989 144.59C161.989 146.083 161.989 147.576 161.989 149.115C163.093 149.218 163.093 149.218 163.688 148.783C164.268 148.18 164.514 147.771 164.513 146.915C164.463 146.259 164.367 145.694 164.125 145.082C163.583 144.618 163.583 144.618 161.989 144.59Z"
					fill="currentColor"
				/>
				<path
					d="M111.488 143.41C117.121 143.41 117.121 143.41 118.675 144C119.611 144.997 119.704 145.673 119.687 147.011C119.612 147.984 119.177 148.444 118.481 149.053C118.102 149.349 117.713 149.633 117.315 149.902C117.61 150.381 117.906 150.861 118.201 151.34C118.289 151.483 118.377 151.625 118.467 151.772C118.87 152.426 119.275 153.079 119.689 153.726C119.811 153.917 119.933 154.107 120.059 154.303C120.167 154.471 120.276 154.639 120.388 154.812C120.617 155.213 120.617 155.213 120.617 155.607C119.527 155.607 118.438 155.607 117.315 155.607C116.898 154.861 116.482 154.115 116.065 153.369C115.946 153.156 115.827 152.944 115.705 152.725C115.535 152.421 115.535 152.421 115.362 152.11C115.257 151.923 115.152 151.735 115.044 151.542C114.889 151.261 114.738 150.977 114.596 150.688C114.532 152.311 114.468 153.934 114.402 155.607C113.44 155.607 112.479 155.607 111.488 155.607C111.488 151.582 111.488 147.557 111.488 143.41ZM114.402 144.59C114.402 146.083 114.402 147.576 114.402 149.115C115.506 149.218 115.506 149.218 116.101 148.783C116.681 148.18 116.927 147.771 116.926 146.915C116.876 146.259 116.78 145.694 116.538 145.082C115.996 144.618 115.996 144.618 114.402 144.59Z"
					fill="currentColor"
				/>
				<path
					d="M95.5493 143.545C95.7834 143.542 96.0175 143.538 96.2587 143.535C97.1243 143.628 97.6163 143.937 98.2442 144.529C98.5851 145.201 98.5989 145.827 98.4749 146.557C97.9946 147.511 97.3538 148.078 96.5326 148.721C97.2194 149.663 97.9203 150.583 98.6691 151.475C99.485 151.2 99.6773 150.616 100.065 149.889C100.172 149.694 100.172 149.694 100.282 149.494C100.458 149.172 100.632 148.848 100.806 148.525C101.19 148.849 101.575 149.174 101.971 149.508C101.689 150.365 101.257 150.948 100.684 151.635C100.526 151.827 100.367 152.019 100.203 152.217C100.082 152.362 99.9598 152.506 99.8345 152.656C100.004 152.89 100.174 153.123 100.344 153.356C100.439 153.487 100.534 153.617 100.631 153.751C101.122 154.388 101.642 154.997 102.165 155.606C101.534 155.629 100.903 155.643 100.271 155.656C100.003 155.666 100.003 155.666 99.7298 155.676C98.3954 155.695 98.3954 155.695 97.7677 155.21C97.6806 155.081 97.5935 154.952 97.5037 154.82C97.3865 154.874 97.2694 154.929 97.1486 154.985C96.9158 155.092 96.9158 155.092 96.6782 155.201C96.4484 155.307 96.4484 155.307 96.2139 155.415C95.0095 155.918 93.6455 156.039 92.3847 155.669C91.4767 155.253 90.925 154.779 90.5114 153.836C90.3603 152.857 90.3936 152.112 90.827 151.217C91.5986 150.333 92.3185 149.729 93.4249 149.311C93.3385 149.162 93.2521 149.012 93.1631 148.857C92.0579 146.815 92.0579 146.815 92.308 145.568C92.6016 144.786 93.0653 144.239 93.7617 143.776C94.3683 143.543 94.902 143.547 95.5493 143.545ZM95.1729 144.59C94.7124 145.29 94.6905 145.535 94.7845 146.361C95.0087 146.852 95.2718 147.279 95.5614 147.738C96.3072 147.451 96.5928 147.092 96.921 146.361C96.9954 145.733 97.0265 145.358 96.7025 144.811C96.1695 144.488 95.781 144.511 95.1729 144.59ZM94.0076 150.098C93.363 150.751 93.0675 151.054 92.9393 151.979C93.0674 152.872 93.3351 153.362 93.9711 153.984C94.5284 154.306 94.9175 154.401 95.5614 154.426C96.0468 154.271 96.463 154.068 96.921 153.836C96.6631 153.276 96.3723 152.809 95.9916 152.327C95.8886 152.196 95.7855 152.066 95.6794 151.931C95.5723 151.797 95.4653 151.663 95.355 151.525C95.2472 151.387 95.1395 151.25 95.0284 151.109C94.6244 150.596 94.6244 150.596 94.2018 150.098C94.1377 150.098 94.0736 150.098 94.0076 150.098Z"
					fill="currentColor"
				/>
				<path
					d="M54.3848 143.41C56.6281 143.41 58.8715 143.41 61.1828 143.41C61.1828 143.994 61.1828 144.578 61.1828 145.18C59.9009 145.115 58.619 145.05 57.2982 144.984C57.2982 146.152 57.2982 147.321 57.2982 148.525C59.2211 148.427 59.2211 148.427 61.1828 148.328C61.1828 148.912 61.1828 149.496 61.1828 150.098C59.9009 150.033 58.619 149.968 57.2982 149.902C57.2982 151.265 57.2982 152.628 57.2982 154.033C59.2211 153.935 59.2211 153.935 61.1828 153.836C61.1828 154.42 61.1828 155.005 61.1828 155.607C58.9395 155.607 56.6961 155.607 54.3848 155.607C54.3848 151.582 54.3848 147.557 54.3848 143.41Z"
					fill="currentColor"
				/>
				<path
					d="M123.142 143.41C125.45 143.41 127.757 143.41 130.134 143.41C130.134 143.994 130.134 144.578 130.134 145.18C128.852 145.115 127.571 145.05 126.25 144.984C126.186 146.152 126.122 147.321 126.056 148.525C127.978 148.427 127.978 148.427 129.94 148.328C129.94 148.912 129.94 149.496 129.94 150.098C128.658 150.033 127.376 149.968 126.056 149.902C126.056 151.265 126.056 152.628 126.056 154.033C128.075 153.935 128.075 153.935 130.134 153.836C130.134 154.42 130.134 155.005 130.134 155.607C127.827 155.607 125.519 155.607 123.142 155.607C123.142 151.582 123.142 147.557 123.142 143.41Z"
					fill="currentColor"
				/>
				<path
					d="M187.821 143.803C188.042 144.474 187.99 144.591 187.736 145.217C187.652 145.428 187.652 145.428 187.567 145.644C187.501 145.804 187.501 145.804 187.433 145.967C187.24 145.967 187.048 145.967 186.85 145.967C186.77 145.813 186.69 145.659 186.607 145.5C186.295 144.924 186.295 144.924 185.612 144.701C184.87 144.584 184.578 144.613 183.937 144.984C183.494 145.352 183.494 145.352 183.475 145.943C183.567 146.719 183.74 146.847 184.325 147.344C184.928 147.681 185.534 147.993 186.155 148.293C187.253 148.853 187.917 149.506 188.477 150.639C188.698 151.803 188.609 152.838 188.076 153.898C187.197 154.932 186.448 155.565 185.102 155.803C183.605 155.912 182.389 155.864 181.023 155.213C181.124 154.352 181.228 153.504 181.412 152.656C181.604 152.656 181.796 152.656 181.994 152.656C182.577 153.486 182.577 153.486 182.577 154.033C183.588 154.468 184.243 154.457 185.296 154.23C185.772 153.919 185.854 153.708 186.049 153.172C186.082 152.468 185.914 152.233 185.49 151.672C185.008 151.337 184.494 151.078 183.973 150.812C181.661 149.548 181.661 149.548 181.217 148.525C180.925 147.365 180.894 146.243 181.383 145.138C182.809 142.893 185.607 142.661 187.821 143.803Z"
					fill="currentColor"
				/>
				<path
					d="M138.814 143.471C139.458 143.803 139.458 143.803 139.652 144.393C139.543 144.795 139.543 144.795 139.373 145.217C139.289 145.428 139.289 145.428 139.204 145.644C139.137 145.804 139.137 145.804 139.069 145.967C138.877 145.967 138.685 145.967 138.487 145.967C138.406 145.813 138.326 145.659 138.244 145.5C137.932 144.924 137.932 144.924 137.248 144.701C136.507 144.584 136.214 144.612 135.573 144.984C135.135 145.352 135.135 145.352 135.088 145.93C135.196 146.632 135.372 146.857 135.927 147.277C136.478 147.621 137.049 147.916 137.625 148.217C138.858 148.874 139.486 149.369 140.113 150.639C140.334 151.803 140.246 152.838 139.713 153.897C138.834 154.932 138.084 155.565 136.739 155.803C135.241 155.912 134.025 155.864 132.66 155.213C132.788 154.369 132.916 153.525 133.048 152.656C133.825 152.852 133.825 152.852 134.104 153.32C134.254 153.575 134.254 153.575 134.408 153.836C134.858 154.227 135.168 154.419 135.767 154.438C136.336 154.388 136.818 154.301 137.309 153.996C137.617 153.464 137.697 153.076 137.71 152.459C137.057 151.402 136.174 151.028 135.102 150.517C134 149.962 133.342 149.316 132.781 148.18C132.558 147.008 132.649 145.973 133.194 144.91C134.677 143.157 136.651 142.72 138.814 143.471Z"
					fill="currentColor"
				/>
				<path
					d="M80.8 143.803C81.0208 144.474 80.9685 144.591 80.7151 145.217C80.6313 145.428 80.6313 145.428 80.5459 145.644C80.4794 145.804 80.4794 145.804 80.4116 145.967C80.2193 145.967 80.027 145.967 79.8289 145.967C79.7488 145.813 79.6686 145.659 79.5861 145.5C79.2743 144.924 79.2743 144.924 78.5907 144.701C77.8492 144.584 77.5567 144.612 76.9154 144.984C76.4776 145.352 76.4776 145.352 76.4298 145.93C76.5384 146.632 76.7145 146.857 77.269 147.277C77.8202 147.621 78.3918 147.916 78.967 148.217C80.1729 148.858 80.7964 149.361 81.4434 150.578C81.7277 151.651 81.6359 152.624 81.2219 153.641C80.6613 154.606 79.8159 155.238 78.8213 155.693C77.1077 155.949 75.5844 155.967 74.002 155.213C74.1301 154.434 74.2583 153.655 74.3904 152.852C74.6468 152.852 74.9032 152.852 75.1673 152.852C75.483 153.32 75.483 153.32 75.75 153.836C76.2825 154.375 76.7158 154.367 77.4473 154.43C78.093 154.424 78.4007 154.299 78.8577 153.836C79.1013 153.175 79.1013 153.175 79.052 152.459C78.4037 151.401 77.5144 151.027 76.4446 150.517C75.3828 149.983 74.6521 149.384 74.1969 148.231C73.9617 146.945 73.922 145.93 74.6294 144.798C76.1535 142.819 78.6759 142.707 80.8 143.803Z"
					fill="currentColor"
				/>
				<path
					d="M169.758 143.41C172.77 143.41 175.783 143.41 178.887 143.41C178.887 143.994 178.887 144.578 178.887 145.18C177.861 145.115 176.836 145.05 175.779 144.984C175.843 148.489 175.907 151.995 175.973 155.607C174.948 155.607 173.922 155.607 172.866 155.607C172.93 152.101 172.994 148.595 173.06 144.984C171.425 145.081 171.425 145.081 169.758 145.18C169.758 144.596 169.758 144.012 169.758 143.41Z"
					fill="currentColor"
				/>
				<path
					d="M42.731 143.41C45.6794 143.41 48.6278 143.41 51.6656 143.41C51.6656 143.994 51.6656 144.578 51.6656 145.18C50.64 145.115 49.6145 145.05 48.5579 144.984C48.622 148.489 48.6861 151.995 48.7521 155.607C47.7266 155.607 46.701 155.607 45.6444 155.607C45.7085 152.101 45.7726 148.595 45.8386 144.984C44.3003 145.081 44.3003 145.081 42.731 145.18C42.731 144.596 42.731 144.012 42.731 143.41Z"
					fill="currentColor"
				/>
				<path
					d="M64.6787 143.41C65.7042 143.41 66.7298 143.41 67.7864 143.41C67.7223 146.915 67.6582 150.421 67.5922 154.033C69.5151 153.935 69.5151 153.935 71.4768 153.836C71.4768 154.42 71.4768 155.005 71.4768 155.607C69.2334 155.607 66.9901 155.607 64.6787 155.607C64.6787 151.582 64.6787 147.557 64.6787 143.41Z"
					fill="currentColor"
				/>
			</g>
			<defs>
				<clipPath id="clip0_71_78">
					<rect
						width="202"
						height="156"
						fill="white"
					/>
				</clipPath>
			</defs>
		</svg>
	);
}
