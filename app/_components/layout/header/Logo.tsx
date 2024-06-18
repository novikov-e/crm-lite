import { FC } from 'react'
import styles from './Logo.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import logo from '@/assets/images/Frame 15.svg'

export const Logo: FC = (props) => {
  return (
      <Link href='/'>
          CRM Lite
			{/* <svg className={styles.logo} xmlns='http://www.w3.org/2000/svg' width={60} height={60} {...props}>
				<g clipPath='url(#a)'>
					<path
						fill='#545454'
						d='M23.453 45.828c-.166-.114-.234-.286-.203-.516a2.36 2.36 0 0 1 .219-.703c.114-.27.281-.567.5-.89.333-.636.63-1.203.89-1.703a109.799 109.799 0 0 0 1.407-2.735c.208-.416.416-.854.625-1.312.218-.459.442-.948.672-1.469.229-.52.484-1.115.765-1.781.021-.042.052-.1.094-.172a.603.603 0 0 1 .172-.188.249.249 0 0 1 .218-.047c.073.01.146.084.22.22.103.208.109.494.015.859a6.751 6.751 0 0 1-.453 1.265c-.219.469-.48.98-.782 1.532-.302.541-.62 1.093-.953 1.656-.333.562-.661 1.12-.984 1.672-.323.552-.61 1.067-.86 1.547-.239.479-.427.916-.562 1.312-.125.385-.166.693-.125.922.74.073 1.485.068 2.235-.016.75-.083 1.5-.182 2.25-.297.75-.125 1.5-.234 2.25-.328.76-.093 1.515-.114 2.265-.062a.353.353 0 0 1 .344.14c.094.115.099.24.016.375h-.141a1.547 1.547 0 0 0-.422 0h-.14c-.584.052-1.266.146-2.047.282-.782.125-1.589.244-2.422.359a40.84 40.84 0 0 1-2.5.266c-.823.062-1.568.057-2.235-.016a.926.926 0 0 1-.156-.063 8.232 8.232 0 0 1-.172-.109Zm10.672 0c.427-1.375.813-2.463 1.156-3.266.354-.812.646-1.38.875-1.703.24-.323.401-.427.485-.312.083.114.073.406-.032.875-.093.469-.302 1.099-.625 1.89-.312.782-.755 1.678-1.328 2.688a.556.556 0 0 1-.297.016.292.292 0 0 1-.234-.188Zm2.734-7.516a.856.856 0 0 1-.03-.28c0-.136.01-.22.03-.25.24-.084.422-.094.547-.032a.42.42 0 0 1 .235.281.664.664 0 0 1-.016.375.571.571 0 0 1-.172.313c-.083.062-.182.073-.297.031-.104-.052-.203-.198-.297-.438Zm2.485 7.516a.528.528 0 0 1-.016-.172.71.71 0 0 1 .016-.187c.031-.115.088-.313.172-.594.083-.292.172-.594.265-.906l.266-.907a79.547 79.547 0 0 0 .313-1.094c.051-.197.062-.385.03-.562a1.5 1.5 0 0 0-.578.063c-.229.052-.458.099-.687.14a2.097 2.097 0 0 1-.625 0c-.188-.041-.323-.166-.406-.375.125-.26.312-.427.562-.5.25-.083.521-.14.813-.172a6.54 6.54 0 0 0 .828-.14 1.05 1.05 0 0 0 .64-.422c.094-.27.204-.599.329-.984l.422-1.235c.145-.427.302-.849.468-1.265.177-.417.36-.787.547-1.11.115-.073.208-.078.281-.015a.526.526 0 0 1 .157.28c.041.115.067.235.078.36a.98.98 0 0 1 0 .25 3.98 3.98 0 0 1-.328.875 24.2 24.2 0 0 0-.422.922c-.125.313-.23.625-.313.938a1.84 1.84 0 0 0 0 .89h3.36c.01 0 .036.037.078.11.041.062.078.114.11.156.051.146-.006.245-.173.297a3.16 3.16 0 0 1-.672.11c-.28.01-.604.02-.968.03a6.67 6.67 0 0 0-1.032.078c-.323.042-.614.12-.875.235-.26.104-.437.266-.53.484a37.036 37.036 0 0 0-.75 2.11 63.39 63.39 0 0 0-.657 2.125 2.48 2.48 0 0 1-.125.156c-.063.062-.13.12-.203.172a.337.337 0 0 1-.219.047c-.063-.01-.115-.073-.156-.188Zm6.625 0c-.313-.104-.552-.26-.719-.469a1.848 1.848 0 0 1-.313-.718 2.637 2.637 0 0 1-.03-.813 5.06 5.06 0 0 1 .187-.828c.312-.333.661-.714 1.047-1.14.395-.438.812-.865 1.25-1.282.437-.417.89-.802 1.359-1.156.48-.365.964-.64 1.453-.828.167-.073.297-.068.39.015.105.073.178.193.22.36a2 2 0 0 1 .046.578 4.306 4.306 0 0 1-.172 1.203 1.073 1.073 0 0 1-.156.344c-.125.146-.37.317-.734.515-.354.198-.75.417-1.188.657-.437.229-.875.468-1.312.718-.438.25-.797.5-1.078.75-.282.24-.448.48-.5.72-.052.239.093.457.437.655.354.042.782.026 1.282-.047.51-.083 1.026-.187 1.546-.312.532-.135 1.042-.27 1.532-.406.49-.146.89-.26 1.203-.344l.187.172c-.229.302-.604.578-1.125.828-.52.25-1.083.458-1.687.625-.604.156-1.193.26-1.766.313-.573.041-1.026.005-1.36-.11Zm3.734-5.969c-.01-.01-.088.037-.234.141a8.781 8.781 0 0 0-.547.39 80.976 80.976 0 0 0-1.36 1.063c-.197.167-.364.313-.5.438-.135.114-.192.172-.171.172.166.03.38.01.64-.063.271-.083.547-.198.828-.344a7.18 7.18 0 0 0 .828-.484c.26-.188.464-.37.61-.547.156-.177.234-.333.234-.469.01-.135-.099-.234-.328-.297ZM9.991 32c-.396 0-.762-.096-1.098-.288a2.174 2.174 0 0 1-.774-.774 2.175 2.175 0 0 1-.288-1.098V21.2c0-.396.096-.756.288-1.08.192-.336.45-.6.774-.792a2.175 2.175 0 0 1 1.098-.288h10.764v1.458H9.991a.69.69 0 0 0-.504.216.66.66 0 0 0-.198.486v8.64c0 .192.066.36.198.504a.722.722 0 0 0 .504.198h10.764V32H9.991Zm23.585 0-4.23-5.04h1.908l4.248 5.022V32h-1.926Zm-10.944 0V19.058h10.8c.396 0 .756.102 1.08.306.336.192.6.45.792.774.192.324.288.684.288 1.08v3.798c0 .396-.096.756-.288 1.08a2.275 2.275 0 0 1-.792.792 2.079 2.079 0 0 1-1.08.288H24.09V32h-1.458Zm2.16-6.3h8.64a.66.66 0 0 0 .486-.198.634.634 0 0 0 .216-.486v-3.798a.634.634 0 0 0-.216-.486.634.634 0 0 0-.486-.216h-8.64a.69.69 0 0 0-.504.216.66.66 0 0 0-.198.486v3.798a.66.66 0 0 0 .198.486.722.722 0 0 0 .504.198ZM37.486 32V19.04h1.998l5.381 6.408 5.383-6.408h1.998V32h-1.459V20.696l-5.922 7.038-5.922-7.038V32h-1.457Z'
					/>
				</g>
				<rect width={58} height={58} x={1} y={1} stroke='#fff' strokeWidth={2} rx={29} />
				<defs>
					<clipPath id='a'>
						<rect width={60} height={60} fill='#fff' rx={30} />
					</clipPath>
				</defs>
			</svg> */}
			{/* <a className='block'> */}
			{/* <Image src={logo} height={60} width={60} className={styles.logo} /> */}
			{/* </a> */}
			{/* <div className={styles.logo}>Logo component</div> */}
		</Link>
	)
}