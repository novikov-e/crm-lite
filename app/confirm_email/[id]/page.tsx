import {NextPage} from 'next'

export default function ConfirmEmailPage({params}: {params: {id: string}}) {
	return <div>Confirm id: {params.id}</div>
}