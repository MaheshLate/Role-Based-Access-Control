 
export default function Dashboard()
{

    const  role = localStorage.getItem("role");

    return (
        <div className="p-10">

            <h1 className="text-2xl mb-4">Dashboard</h1>
            
            {role ==="ROLE_USER" && (
               
                <div className="bg-blue-200  p-4 mb-3">
                    User Content 
                </div>
            )}


                    {
                        role ==="ROLE_ADMIN" && (
                            <>
                            <div className="bg-blue-200 p-4 mb-3">
                                User Content

                            
                            </div>
                            <div className="bg-gray-100 mb-3">
                                Welcome { localStorage.getItem("email")}
                            </div>

                                <div className="bg-red-200 p-4">
                                    Admin Content

                                </div>
                            </>
                        )
                    }
     

        </div>

    );
}