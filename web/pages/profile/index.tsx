import Layout from "@/components/Layout/Layout";
import { ProfileTabs } from "@/constants/values";
import { useProfileDetails } from "@/hooks/swr/profileDetails";
import { joinDate } from "@/utils/date";
import { useState } from "react";

export default function Profile(){
    const [ profileTabs,  setProfileTabs ] = useState<string>(ProfileTabs[0])
    return(
        <Layout>
            <section className="grid gap-2 grid-cols-6">
                <div className="col-span-1">
                    <div className=" border divide-y flex flex-col">
                        <span className="py-2 px-3 cursor-pointer font-semibold text-lg"
                        onClick={()=> setProfileTabs(ProfileTabs[0])}>
                            Profile
                        </span>
                        <span className="py-2 px-3 cursor-pointer font-semibold text-lg"
                        onClick={()=> setProfileTabs(ProfileTabs[1])}>
                            Account
                        </span>
                    </div>
                </div>
                <div className="border col-span-5 p-8 shadow-sm rounded-md">
                    { profileTabs == ProfileTabs[0] && <ProfileDetails />}
                    { profileTabs == ProfileTabs[1] &&  <Account />}
                </div>
                
            </section>
        </Layout>
    )
}

function ProfileDetails(){
    const { profile, loading } = useProfileDetails()

    return(
        <>
            {!loading && (<div>
                {/* image */}
                {/* details */}
                <div className="space-y-4">
                    <div className="font-semibold text-Jet flex justify-start items-center space-x-3">
                        <span className="text-lg">Full name:</span>
                        <input type="text" className="text-opacity-70 bg-GhostWhite text-Night border rounded-md py-1 px-3"
                        value={profile?.full_name} onChange={(e)=> {}} />
                    </div>
                    <div className="font-semibold text-Jet flex justify-start items-center space-x-3">
                        <span className="text-lg">Email:</span>
                        <input type="text" className="text-opacity-70 bg-GhostWhite text-Night border rounded-md py-1 px-3"
                        value={profile?.email} onChange={(e)=> {}} />
                    </div>
                    <div className="font-semibold text-Jet flex justify-start items-center space-x-3">
                        <span className="text-lg">Join date:</span>
                        <span  className="text-opacity-70">{joinDate(profile?.join_date)}</span>
                    </div>
                    <div>
                        <button className="py-1 px-3 rounded-md bg-PrincetonOrange text-GhostWhite font-semibold"
                        onClick={()=> {}}>
                            Update
                        </button>
                    </div>
                </div>

            </div>)}
        </>
    )
}

function Account(){
    return(
        <>
            <section>
                <button className="px-4 py-1 bg-Tomato text-GhostWhite font-semibold text-lg rounded-md"
                > Remove Account </button>
            </section>
        </>
    )
}