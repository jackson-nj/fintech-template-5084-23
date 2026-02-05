 import { useState, useEffect, useCallback } from "react";
 import { supabase } from "@/integrations/supabase/client";
 import { useToast } from "@/hooks/use-toast";
 
 type TableName = "equipment" | "hire" | "gallery" | "certifications" | "services";
 
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 export function useSupabaseData<T extends { id: string }>(tableName: TableName) {
   const [data, setData] = useState<T[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const { toast } = useToast();
 
   const fetchData = useCallback(async () => {
     setLoading(true);
     setError(null);
     try {
       const { data: result, error: fetchError } = await supabase
         .from(tableName)
         .select("*")
         .order("created_at", { ascending: false });
 
       if (fetchError) throw fetchError;
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       setData((result as any) || []);
     } catch (err: unknown) {
       const message = err instanceof Error ? err.message : "Unknown error";
       setError(message);
       toast({
         title: "Error fetching data",
         description: message,
         variant: "destructive",
       });
     } finally {
       setLoading(false);
     }
   }, [tableName, toast]);
 
   useEffect(() => {
     fetchData();
   }, [fetchData]);
 
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const create = async (item: any) => {
     try {
       const { data: result, error: createError } = await supabase
         .from(tableName)
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         .insert(item as any)
         .select()
         .single();
 
       if (createError) throw createError;
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       const newItem = result as any as T;
       setData((prev) => [newItem, ...prev]);
       toast({ title: "Success", description: "Item created successfully" });
       return newItem;
     } catch (err: unknown) {
       const message = err instanceof Error ? err.message : "Unknown error";
       toast({
         title: "Error creating item",
         description: message,
         variant: "destructive",
       });
       throw err;
     }
   };
 
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const update = async (id: string, updates: any) => {
     try {
       const { data: result, error: updateError } = await supabase
         .from(tableName)
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         .update(updates as any)
         .eq("id", id)
         .select()
         .single();
 
       if (updateError) throw updateError;
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       const updatedItem = result as any as T;
       setData((prev) => prev.map((item) => (item.id === id ? updatedItem : item)));
       toast({ title: "Success", description: "Item updated successfully" });
       return updatedItem;
     } catch (err: unknown) {
       const message = err instanceof Error ? err.message : "Unknown error";
       toast({
         title: "Error updating item",
         description: message,
         variant: "destructive",
       });
       throw err;
     }
   };
 
   const remove = async (id: string) => {
     try {
       const { error: deleteError } = await supabase
         .from(tableName)
         .delete()
         .eq("id", id);
 
       if (deleteError) throw deleteError;
       setData((prev) => prev.filter((item) => item.id !== id));
       toast({ title: "Success", description: "Item deleted successfully" });
     } catch (err: unknown) {
       const message = err instanceof Error ? err.message : "Unknown error";
       toast({
         title: "Error deleting item",
         description: message,
         variant: "destructive",
       });
       throw err;
     }
   };
 
   return { data, loading, error, refetch: fetchData, create, update, remove };
 }