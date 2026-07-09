import { getUser } from "@/app/actions/user.actions";
import { dbConnect } from "@/app/libs/dbconnect";
import UserModel from "@/app/models/user.model";
import { User } from "@/app/types";
import { Metadata } from "next";
import React from "react";

export async function generateStaticParams() {
  await dbConnect();
  const users: User[] = await UserModel.find();
  console.log(users);

  return users.map((user) => ({
    id: [user._id?.toString()],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
const {id}= await params
  await dbConnect()
  const user=  await UserModel.findById(id[0])
  const metadata: Metadata = {
    title: `${user.firstname+" "+user.lastname}`,
    description: "This is a user from oshodi",

    openGraph: {
      images: [`${user.profileUrl}`],
    },
  };
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log(id);

  const user: User = await getUser(id[0]);
  console.log(user);

  return (
    <div>
      This is the dynamic page for {user.firstname + " " + user.lastname}
    </div>
  );
};

export default Page;