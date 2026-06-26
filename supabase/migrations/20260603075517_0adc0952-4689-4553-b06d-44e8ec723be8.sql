-- Fix function search path
ALTER FUNCTION public.update_updated_at_column() SET search_path = public;

-- Profile creator on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name, avatar_url, role)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'display_name', NEW.raw_user_meta_data->>'avatar_url', 'customer');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Improve RLS for orders (anyone can insert but let's make it explicitly check the role or just accept it's public for now)
-- The linter warns about WITH CHECK (true). We can't really restrict it much more for anonymous checkout.
-- But we can ensure order_items are only inserted if the order was just created.
-- For now, let's just fix the function warning.
