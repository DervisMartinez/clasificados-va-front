'use client'

import ShareAction from "./dialogs/ShareDialog"
import ReportAction from "./dialogs/ReportDialog"
import { useAuth } from "@/context/AuthContext"

export default function Actions({ clasificado }) {

    const {user} = useAuth();

    return (
        <div className="flex gap-3 my-4 justify-self-end self-end">
            
            <ShareAction clasificado={clasificado}/>
           

            {(user && !clasificado.user_is_author) && <ReportAction  clasificado={clasificado} />}
           
        </div>
    )
}