import supabaseClient from "../utils/superbase";
import { supabaseUrl } from "../utils/superbase";

export async function getCompanies(token) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase.from("companies").select("*");

  if (error) {
    console.log("Error fetching companies:", error);
    return null;
  }

  return data;
}

export async function addNewCompanies(token, _, companyData) {
  const supabase = await supabaseClient(token);

  const random = Math.floor(Math.random() * 90000);
  const fileName = `logo-${random}-${companyData.name}`;

  // Upload the logo to Supabase storage
  const { error: storageError } = await supabase.storage
    .from("companies_logo")
    .upload(fileName, companyData.logo);

  // Handle any storage errors
  if (storageError) {
    console.error("Error uploading logo:", storageError); // Log error to debug
    throw new Error("Error uploading logo");
  }

  // Generate URL for the uploaded logo
  const logo_url = `${supabaseUrl}/storage/v1/object/public/companies_logo/${fileName}`;
  console.log("Logo URL:", logo_url); // Log URL to verify it's correct

  // Insert company data into the database with the logo URL
  const { data, error } = await supabase
    .from("companies")
    .insert([
      {
        name: companyData.name,
        logo_url, // Store the generated logo URL in the database
      },
    ])
    .select("*");

  // Handle any database errors
  if (error) {
    console.log("Error Submitting companies:", error);
    return null;
  }

  return data;
}
