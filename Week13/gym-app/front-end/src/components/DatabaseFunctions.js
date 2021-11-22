import { createClient } from "@supabase/supabase-js";


const supabase = createClient(
    "https://nvqvtqiziwsujkuhhxxs.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjc0NTQyOCwiZXhwIjoxOTUyMzIxNDI4fQ.TWe7WYyR8kiwCta3vjNVACkAMKzOi6ROcO7Gr87dcUU"
);

export async function createUserFromLogin(e, userData){
e.preventDefault();

const { } = await supabase
    .from("gymLoginRegister")
    .insert([userData]);

}