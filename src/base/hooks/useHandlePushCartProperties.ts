import { useEffect, useState } from "react";
import supabase from "../../config/supabaseClient";
import { IProperty } from "../interface/IProperty";
import { useProperties } from "../utils/fetchProperties";
import { getAuthData } from "../utils/getAuthData";

export const useHandlePushCartProperties = () => {
  const [userId, setUserId] = useState("");
  const { data: properties } = useProperties();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAuthData();
      if (data) {
        setUserId(data.user.id);
      }
    };

    fetchData();
  }, []);

  const pushCartProperties = async (propertyId: string) => {
    const cartProperties = properties?.filter(
      (property: IProperty) => property.property_id === propertyId
    );
    async function insertData(tableName: string, data: any) {
      const { data: insertedData, error } = await supabase
        .from(tableName)
        .insert(data);

      if (error) {
        console.error("Error inserting data:", error.message);
        return;
      }

      console.log("Data inserted successfully:", insertedData);
    }

    const tableName = "cart_properties";
    const dataToInsertArray = cartProperties?.map((element) => ({
      user_id: userId,
      description: element.description,
      price: element.price,
      mortgage: element.mortgage,
      address: element.propertyLocation.address,
      city: element.propertyLocation.city,
      state: element.propertyLocation.state,
      country: element.propertyLocation.country,
      beds: element.propertyDetails.beds,
      baths: element.propertyDetails.baths,
      sqft: element.propertyDetails.sqft,
      property_photo_urls: element.propertyPhotos[0].url,
    }));

    await insertData(tableName, dataToInsertArray);
  };

  return { pushCartProperties };
};