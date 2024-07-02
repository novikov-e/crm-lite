import {EditUser} from '../_components/EditUser'

export default function ConfirmEmailPage({params}: {params: {id: string}}) {
	return <EditUser id={params.id}/>
}