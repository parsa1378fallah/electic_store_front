"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { format } from "date-fns";
import UserService, { User } from "@/services/UserService";
import EditDialog from "./EditDialog";
const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const changeRule = (userId: number, level: "1" | "2") => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.userId === userId ? { ...user, level } : user
      )
    );
    console.log();
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await UserService.getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Table className="  border border-slate-400">
      <TableHeader className="bg-gray-300">
        <TableRow>
          <TableHead className="w-1/12 text-center border border-black">
            <p className="text-center">آیدی</p>
          </TableHead>
          <TableHead className="w-2/12 text-right border border-black">
            نام
          </TableHead>
          <TableHead className="w-3/12 text-right border border-black">
            ایمیل
          </TableHead>
          <TableHead className="w-2/12 text-right border border-black">
            نقش
          </TableHead>
          <TableHead className="w-3/12 text-right border border-black">
            زمان ساخت
          </TableHead>
          <TableHead className="w-1/12 text-right border border-black">
            عمل
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.userId}>
            <TableCell className="border border-black text-center">
              {user.userId}
            </TableCell>
            <TableCell className="border border-black">{`${user.firstName} ${user.lastName}`}</TableCell>
            <TableCell className="border border-black">{user.email}</TableCell>
            <TableCell className="border border-black">
              {user.level === "1" ? "مدیر" : "کاربر عادی"}
            </TableCell>
            <TableCell className="border border-black">
              {format(new Date(user.createdAt), "PPP")}
            </TableCell>
            <TableCell className="border border-black">
              <EditDialog user={user} changeCurrentUserRoll={changeRule} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
