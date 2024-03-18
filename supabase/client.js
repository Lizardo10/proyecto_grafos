
//Codigo realizado por Lizardo
//Importando el cliente de supabase
import { createClient } from "@supabase/supabase-js";

//Url del cliente de supabase
const supabaseUrl = process.env.SUPABASE_URL;
//Funcion que activa el cliente de spabase 
export const supabase = createClient(supabaseUrl,process.env.SUPABASE_CLIENT)
