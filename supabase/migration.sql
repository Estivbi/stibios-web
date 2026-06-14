-- MadRing Guide — schema + seed data
-- Run this in your Supabase project → SQL Editor

CREATE TABLE IF NOT EXISTS events (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  day          text NOT NULL CHECK (day IN ('vie','sab','dom','free')),
  time_label   text,
  name         text NOT NULL,
  category     text,
  type         text CHECK (type IN ('f1','f2','f3','show')),
  badge        text,
  is_confirmed boolean DEFAULT false,
  created_at   timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS zones (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  number      int,
  name        text,
  description text,
  ticket_type text CHECK (ticket_type IN ('all','gold','platinum','general','separate')),
  location    text
);

CREATE TABLE IF NOT EXISTS transport_options (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  icon          text,
  title         text,
  detail        text,
  time_estimate text,
  sort_order    int
);

CREATE TABLE IF NOT EXISTS push_subscriptions (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  endpoint     text UNIQUE NOT NULL,
  subscription jsonb NOT NULL,
  created_at   timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS user_favorites (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  event_id   uuid REFERENCES events(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE (user_id, event_id)
);

-- Enable Row Level Security
ALTER TABLE events             ENABLE ROW LEVEL SECURITY;
ALTER TABLE zones              ENABLE ROW LEVEL SECURITY;
ALTER TABLE transport_options  ENABLE ROW LEVEL SECURITY;
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_favorites     ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read events"            ON events            FOR SELECT USING (true);
CREATE POLICY "Public read zones"             ON zones             FOR SELECT USING (true);
CREATE POLICY "Public read transport_options" ON transport_options FOR SELECT USING (true);

-- push_subscriptions: only service role key (API route)
CREATE POLICY "Service role push" ON push_subscriptions USING (false);

-- user_favorites: each user manages their own
CREATE POLICY "Own favorites select" ON user_favorites FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Own favorites insert" ON user_favorites FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Own favorites delete" ON user_favorites FOR DELETE USING (auth.uid() = user_id);

-- SEED DATA

INSERT INTO events (day, time_label, name, category, type, badge, is_confirmed) VALUES
  ('vie','10:00','FP1 — Fórmula 1','Libre 1','f1','F1',true),
  ('vie','11:30','FP1 — Fórmula 2','Libre 1','f2','F2',true),
  ('vie','14:00','FP2 — Fórmula 1','Libre 2','f1','F1',true),
  ('vie','15:30','Sprint — Fórmula 3','Carrera','f3','F3',true),
  ('vie','18:00','Fan Zone abre — Zona Pit Lane','Espectáculo','show','GRATIS',true),
  ('vie','20:30','Concierto apertura — Artista TBC','Música','show','GRATIS',false),
  ('sab','09:00','FP3 — Fórmula 1','Libre 3','f1','F1',true),
  ('sab','10:30','Clasificación — Fórmula 2','Qualy','f2','F2',true),
  ('sab','13:00','Clasificación — Fórmula 3','Qualy','f3','F3',true),
  ('sab','16:00','CLASIFICACIÓN F1 — Gran Premio de España','Qualy','f1','F1',true),
  ('sab','19:00','Pit Lane Walk — Acceso especial','Experiencia','show','ENTRADA',true),
  ('sab','21:00','Concierto principal — Estadio Metropolitano','Música','show','GRATIS',false),
  ('dom','09:00','Carrera — Fórmula 3','Race','f3','F3',true),
  ('dom','11:00','Carrera — Fórmula 2','Race','f2','F2',true),
  ('dom','13:00','Driver Parade — Calle de salida','Espectáculo','show',null,true),
  ('dom','15:00','CARRERA F1 — Gran Premio de España','Race','f1','F1',true),
  ('dom','17:30','Podio + Trofeos','Ceremonia','f1','F1',true),
  ('dom','19:00','Concierto de cierre','Música','show','GRATIS',false),
  ('free','Todo el día','Fan Zone Gran Vía — Pantallas + simulador','Ciudad','show','GRATIS',true),
  ('free','11–13 Sep','Exhibición coches históricos — Puerta de Alcalá','Ciudad','show','GRATIS',true),
  ('free','Vie 20:30','Proyección F2 — Matadero Madrid','Ciudad','show','GRATIS',false),
  ('free','Sáb 16:00','Clasificación F1 en pantalla — Plaza Mayor','Ciudad','show','GRATIS',true),
  ('free','Dom 15:00','Carrera F1 en directo — Retiro / FNAC','Ciudad','show','GRATIS',true);

INSERT INTO zones (number, name, description, ticket_type, location) VALUES
  (1,'General Sur','Vista panorámica de la recta de meta y curva 1. Perfecta para seguir toda la carrera.','general','Recta principal'),
  (2,'Tribuna Pit Lane','Frente a los garajes. Ves los pit stops y la actividad del box en tiempo real.','gold','Pit lane'),
  (3,'Platinum Paddock Club','Acceso al paddock, hospitalidad premium, terraza con vistas al circuito.','platinum','Paddock'),
  (4,'Curva 1 Norte','La curva de frenada más espectacular del circuito. Zona de adelantamientos clave.','general','Curva 1'),
  (5,'Fan Zone Pit Lane','Zona de entretenimiento, simuladores y actividades. Sin entrada al recinto principal.','all','Exterior IFEMA'),
  (6,'Gold Stand Chicane','Vista privilegiada de la chicane y el sector 2. Zona sombreada por la tarde.','gold','Chicane'),
  (7,'Kids Zone','Área infantil con actividades, karting junior y Meet & Greet con mascotas F1.','all','Zona Norte'),
  (8,'Concierto Metropolitano','Entrada independiente para el concierto del sábado noche. No requiere ticket de carrera.','separate','Estadio Metropolitano');

INSERT INTO transport_options (icon, title, detail, time_estimate, sort_order) VALUES
  ('🚇','Metro','Línea 8 (Rosa) → Campo de las Naciones\nDesde Nuevos Ministerios o Aeropuerto T4','20''',1),
  ('🚆','Cercanías','C-1 → Aeropuerto T4. Shuttle gratuito T4→IFEMA en días de carrera (pendiente confirmación)','25''',2),
  ('🚌','Bus','Líneas 101, 104, 122 → IFEMA. Servicio especial nocturno los tres días','35''',3),
  ('🚗','Coche / VTC','Parking IFEMA Norte. Evitar A-2 dirección Madrid los sábados. Mejor Uber/Cabify: zona drop-off P1','—',4);
