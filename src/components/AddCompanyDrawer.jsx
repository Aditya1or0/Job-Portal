import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { BarLoader } from "react-spinners";
import useFetch from "../hooks/useFetch";
import { addNewCompanies } from "../api/apiCompanies";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  logo: z
    .any()
    .refine(
      (file) =>
        file &&
        file[0] &&
        (file[0].type === "image/png" || file[0].type === "image/jpeg"),
      { message: "Only PNG and JPEG Images are allowed" }
    ),
});

const AddCompanyDrawer = ({ fetchCompanies }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const {
    loading: loadingAddCompany,
    error: errorAddCompany,
    data: dataAddCompany,
    fn: fnAddCompany,
  } = useFetch(addNewCompanies);

  const onSubmit = (data) => {
    fnAddCompany({
      ...data,
      logo: data.logo[0], // Assuming logo is an array, extract the first element
    });
  };

  useEffect(() => {
    if (dataAddCompany) {
      fetchCompanies();
      reset(); // Optionally reset the form after successful submission
    }
  }, [dataAddCompany, fetchCompanies, reset]);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary" type="button" size="sm">
          Add Company
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add New Company</DrawerTitle>
        </DrawerHeader>
        <form className="flex gap-2 p-4 pb-0" onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Company Name" {...register("name")} />
          <Input
            placeholder="Add logo"
            type="file"
            accept="image/*"
            className="file:text-gray-500"
            {...register("logo")}
          />

          <Button
            type="submit"
            disabled={loadingAddCompany}
            variant="destructive"
            className="w-36"
          >
            {loadingAddCompany ? "Adding..." : "Add"}
          </Button>
        </form>

        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        {errors.logo && <p className="text-red-500">{errors.logo.message}</p>}

        {errorAddCompany && (
          <p className="text-red-500">{errorAddCompany?.message}</p>
        )}
        {loadingAddCompany && <BarLoader width={"100%"} color="#36d7b7" />}

        <DrawerFooter>
          <Button variant="secondary" type="button">
            Cancel
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AddCompanyDrawer;
