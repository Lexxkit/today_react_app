import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yyhgyevhyiuvfupexgco.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5aGd5ZXZoeWl1dmZ1cGV4Z2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMjA4NjgsImV4cCI6MjAzMjU5Njg2OH0.4DIFK76aWucC7XRt1lR8rhRNlBl5eoDtPqEdZwzjgvo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
