'use client';

import { useState } from 'react';
import { BUSINESS_INFO } from '@/lib/constants/business-info';

type BookingFormProps = {
  layout?: 'vertical' | 'horizontal';
};

export function BookingForm({ layout = 'vertical' }: BookingFormProps) {
  const [formData, setFormData] = useState({
    serviceType: 'outstation',
    name: '',
    phone: '',
    pickup: 'Mysore',
    drop: '',
    departDate: '',
    departTime: '',
    returnDate: '',
    airportDirection: 'to-airport',
    airportName: 'Bengaluru (BLR)',
    localPackage: '8-hours',
    tourPackage: 'mysore-one-day-tour',
    passengers: '4',
    vehicle: 'sedan',
    tripType: 'oneway'
  });

  const isOutstation = formData.serviceType === 'outstation';
  const isLocal = formData.serviceType === 'local';
  const isAirport = formData.serviceType === 'airport';
  const isTempo = formData.serviceType === 'tempo';
  const isTour = formData.serviceType === 'tour';

  const passengerOptions = isTempo
    ? [
        { value: '8-11', label: '8-11 Passengers' },
        { value: '12-17', label: '12-17 Passengers' },
        { value: '18+', label: '18+ Passengers' },
      ]
    : [
        { value: '1', label: '1 Passenger' },
        { value: '2', label: '2 Passengers' },
        { value: '3', label: '3 Passengers' },
        { value: '4', label: '4 Passengers' },
        { value: '5-7', label: '5-7 Passengers' },
        { value: '8+', label: '8+ Passengers' },
      ];

  const vehicleOptions = isTempo
    ? [
        { value: 'tempo', label: 'Tempo Traveller (12-17 Seater)' },
        { value: 'bus', label: 'Bus (20+ Seater)' },
      ]
    : [
        { value: 'sedan', label: 'Sedan (4 Seater)' },
        { value: 'suv', label: 'SUV (7 Seater)' },
        ...(isTour ? [{ value: 'tempo', label: 'Tempo Traveller (12-17 Seater)' }] : []),
      ];

  const tourPackageLabels: Record<string, string> = {
    'mysore-one-day-tour': 'Mysore One Day Tour',
    'mysore-to-coorg': 'Mysore to Coorg',
    'mysore-to-ooty': 'Mysore to Ooty',
    'mysore-to-wayanad': 'Mysore to Wayanad',
  };

  const setServiceType = (nextService: string) => {
    setFormData((prev) => {
      if (nextService === 'tempo') {
        return { ...prev, serviceType: nextService, vehicle: 'tempo', passengers: '12-17', tripType: 'oneway' };
      }
      if (nextService === 'local') {
        return { ...prev, serviceType: nextService, vehicle: prev.vehicle === 'bus' ? 'suv' : prev.vehicle, localPackage: '8-hours' };
      }
      if (nextService === 'airport') {
        return {
          ...prev,
          serviceType: nextService,
          vehicle: prev.vehicle === 'bus' || prev.vehicle === 'tempo' ? 'suv' : prev.vehicle,
          airportDirection: 'to-airport',
        };
      }
      if (nextService === 'tour') {
        return { ...prev, serviceType: nextService, tourPackage: 'mysore-one-day-tour' };
      }
      return { ...prev, serviceType: nextService, vehicle: prev.vehicle === 'bus' ? 'suv' : prev.vehicle };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceLabels: Record<string, string> = {
      outstation: "Outstation",
      local: "Local Sightseeing",
      airport: "Airport Transfer",
      tempo: "Tempo Traveller",
      tour: "Tour Package",
    };

    const tripLabels: Record<string, string> = {
      oneway: "One Way",
      roundtrip: "Round Trip",
    };

    const vehicleLabels: Record<string, string> = {
      sedan: "Sedan (4 seater)",
      suv: "SUV (7 seater)",
      tempo: "Tempo Traveller (12-17 seater)",
      bus: "Bus (20+ seater)",
    };

    const lines: string[] = ["Hi, I would like to book a cab.", ""]; 
    const addLine = (label: string, value?: string) => {
      const trimmed = (value ?? "").toString().trim();
      if (!trimmed) return;
      lines.push(`${label}: ${trimmed}`);
    };

    addLine("Service", serviceLabels[formData.serviceType] ?? formData.serviceType);

    if (isOutstation || isTempo) {
      addLine("Trip Type", tripLabels[formData.tripType] ?? formData.tripType);
    }

    addLine("Name", formData.name);
    addLine("Phone", formData.phone);

    if (isTour) {
      addLine("Package", tourPackageLabels[formData.tourPackage] ?? formData.tourPackage);
    }

    if (isAirport) {
      addLine("Direction", formData.airportDirection === 'to-airport' ? 'Drop to Airport' : 'Pickup from Airport');
      addLine("Airport", formData.airportName);
      addLine("Pickup", formData.pickup);
      addLine("Drop", formData.drop);
    } else if (isLocal) {
      addLine("Pickup", formData.pickup);
      addLine("Package", formData.localPackage === '4-hours' ? '4 Hours (Half Day)' : '8 Hours (Full Day)');
      addLine("Coverage", "Mysore city limits");
    } else if (isTour) {
      addLine("Pickup", formData.pickup);
    } else {
      addLine("From", formData.pickup);
      addLine("To", formData.drop);
    }

    addLine("Depart Date", formData.departDate);
    addLine("Depart Time", formData.departTime);

    if ((isOutstation || isTempo) && formData.tripType === 'roundtrip') {
      addLine("Return Date", formData.returnDate);
    }

    addLine("Passengers", formData.passengers);
    addLine("Vehicle", vehicleLabels[formData.vehicle] ?? formData.vehicle);

    const message = lines.join("\n");

    const whatsappPhone = BUSINESS_INFO.whatsapp.replace(/\D/g, "");
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const containerClassName =
    layout === 'horizontal'
      ? 'bg-white rounded-2xl shadow-lg ring-1 ring-slate-900/10 p-5 md:p-6 w-full'
      : 'bg-white rounded-2xl shadow-lg ring-1 ring-slate-900/10 p-5 md:p-6 max-w-xl mx-auto';

  return (
    <div className={containerClassName}>
      <div className={layout === 'horizontal' ? 'mb-4' : 'mb-4'}>
        <p className="text-xs font-semibold text-slate-600">Instant quote on WhatsApp</p>
        <h3 className={layout === 'horizontal' ? 'text-xl font-bold text-slate-900 mt-1' : 'text-2xl font-bold text-slate-900 mt-1'}>
          Book Your Taxi
        </h3>
        <p className="text-sm text-slate-600 mt-1">24/7 service • Professional drivers • Transparent pricing</p>
      </div>

      {layout === 'horizontal' ? (
        <>
          <div className="mb-4 rounded-xl bg-slate-50 p-1 ring-1 ring-slate-900/10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, serviceType: 'outstation', tripType: 'oneway' }))}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  formData.serviceType === 'outstation' && formData.tripType === 'oneway'
                    ? 'bg-white text-slate-900 ring-1 ring-slate-900/10'
                    : 'text-slate-700 hover:bg-white/70'
                }`}
              >
                One Way
              </button>
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, serviceType: 'outstation', tripType: 'roundtrip' }))}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  formData.serviceType === 'outstation' && formData.tripType === 'roundtrip'
                    ? 'bg-white text-slate-900 ring-1 ring-slate-900/10'
                    : 'text-slate-700 hover:bg-white/70'
                }`}
              >
                Round Trip
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    serviceType: 'local',
                    localPackage: '8-hours',
                    vehicle: prev.vehicle === 'bus' ? 'suv' : prev.vehicle,
                  }))
                }
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  formData.serviceType === 'local'
                    ? 'bg-white text-slate-900 ring-1 ring-slate-900/10'
                    : 'text-slate-700 hover:bg-white/70'
                }`}
              >
                Local
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    serviceType: 'airport',
                    airportDirection: 'to-airport',
                    vehicle: prev.vehicle === 'bus' || prev.vehicle === 'tempo' ? 'suv' : prev.vehicle,
                  }))
                }
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  formData.serviceType === 'airport'
                    ? 'bg-white text-slate-900 ring-1 ring-slate-900/10'
                    : 'text-slate-700 hover:bg-white/70'
                }`}
              >
                Airport
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-3">
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">From</label>
              <input
                type="text"
                value={formData.pickup}
                onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                placeholder="Mysore"
                className="w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                required
              />
            </div>

            {formData.serviceType === 'local' ? (
              <div className="md:col-span-3">
                <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Package</label>
                <select
                  value={formData.localPackage}
                  onChange={(e) => setFormData({ ...formData, localPackage: e.target.value })}
                  className="w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                  required
                >
                  <option value="4-hours">4 Hours (Half Day)</option>
                  <option value="8-hours">8 Hours (Full Day)</option>
                </select>
              </div>
            ) : (
              <div className="md:col-span-3">
                <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">To</label>
                <input
                  type="text"
                  value={formData.drop}
                  onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                  placeholder={formData.serviceType === 'airport' ? 'Airport / destination' : 'Drop location'}
                  className="w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                  required
                />
              </div>
            )}

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Pickup Date</label>
              <input
                type="date"
                value={formData.departDate}
                onChange={(e) => setFormData({ ...formData, departDate: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Pickup Time</label>
              <input
                type="time"
                value={formData.departTime}
                onChange={(e) => setFormData({ ...formData, departTime: e.target.value })}
                className="w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
              />
            </div>

            <div className="md:col-span-2 md:self-end">
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-sm hover:shadow flex items-center justify-center"
              >
                Explore cabs
              </button>
            </div>

            <div className="md:col-span-4">
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                required
              />
            </div>

            <div className="md:col-span-4">
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Phone *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="10-digit mobile"
                pattern="[0-9+\s-]+"
                className="w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Passengers *</label>
              <select
                value={formData.passengers}
                onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                className="w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                required
              >
                {passengerOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Vehicle</label>
              <select
                value={formData.vehicle}
                onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                className="w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
              >
                {vehicleOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            {formData.serviceType === 'airport' && (
              <>
                <div className="md:col-span-4">
                  <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Direction *</label>
                  <select
                    value={formData.airportDirection}
                    onChange={(e) => setFormData({ ...formData, airportDirection: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                    required
                  >
                    <option value="to-airport">Drop to Airport</option>
                    <option value="from-airport">Pickup from Airport</option>
                  </select>
                </div>
                <div className="md:col-span-4">
                  <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Airport *</label>
                  <select
                    value={formData.airportName}
                    onChange={(e) => setFormData({ ...formData, airportName: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                    required
                  >
                    <option value="Bengaluru (BLR)">Bengaluru (BLR)</option>
                    <option value="Mysore (MYQ)">Mysore (MYQ)</option>
                    <option value="Mangalore (IXE)">Mangalore (IXE)</option>
                    <option value="Kannur (CNN)">Kannur (CNN)</option>
                  </select>
                </div>
              </>
            )}

            <div className="md:col-span-12">
              <p className="text-center text-sm text-slate-600">
                Prefer a call?{' '}
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-blue-700 font-semibold hover:underline">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>
            </div>
          </form>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Service Type (buttons) */}
          <div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <label className="block text-xs font-semibold tracking-wide text-slate-600">Service *</label>
              <span className="text-xs font-semibold text-slate-500">No hidden charges</span>
            </div>
            <div className="rounded-xl bg-slate-50 p-1 ring-1 ring-slate-900/10">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-1">
                {[
                  { key: 'outstation', label: 'Outstation' },
                  { key: 'local', label: 'Local' },
                  { key: 'airport', label: 'Airport' },
                  { key: 'tempo', label: 'Tempo' },
                  { key: 'tour', label: 'Tour' },
                ].map((s) => (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setServiceType(s.key)}
                    className={`rounded-lg px-2 py-2 text-xs font-semibold transition-colors ${
                      formData.serviceType === s.key
                        ? 'bg-white text-slate-900 ring-1 ring-slate-900/10'
                        : 'text-slate-700 hover:bg-white/70'
                    }`}
                    aria-pressed={formData.serviceType === s.key}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Your Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Phone *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="10-digit mobile"
                pattern="[0-9+\s-]+"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                required
              />
            </div>
          </div>

          {/* Trip Type (Outstation/Tempo only) */}
          {(isOutstation || isTempo) && (
            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Trip Type</label>
              <div className="rounded-xl bg-slate-50 p-1 ring-1 ring-slate-900/10">
                <div className="grid grid-cols-2 gap-1">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, tripType: 'oneway' })}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                      formData.tripType === 'oneway' ? 'bg-white text-slate-900 ring-1 ring-slate-900/10' : 'text-slate-700 hover:bg-white/70'
                    }`}
                    aria-pressed={formData.tripType === 'oneway'}
                  >
                    One Way
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, tripType: 'roundtrip' })}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                      formData.tripType === 'roundtrip' ? 'bg-white text-slate-900 ring-1 ring-slate-900/10' : 'text-slate-700 hover:bg-white/70'
                    }`}
                    aria-pressed={formData.tripType === 'roundtrip'}
                  >
                    Round Trip
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Service-specific options */}
          {isAirport && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Direction *</label>
                <select
                  value={formData.airportDirection}
                  onChange={(e) => setFormData({ ...formData, airportDirection: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                  required
                >
                  <option value="to-airport">Drop to Airport</option>
                  <option value="from-airport">Pickup from Airport</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Airport *</label>
                <select
                  value={formData.airportName}
                  onChange={(e) => setFormData({ ...formData, airportName: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                  required
                >
                  <option value="Bengaluru (BLR)">Bengaluru (BLR)</option>
                  <option value="Mysore (MYQ)">Mysore (MYQ)</option>
                  <option value="Mangalore (IXE)">Mangalore (IXE)</option>
                  <option value="Kannur (CNN)">Kannur (CNN)</option>
                </select>
              </div>
            </div>
          )}

          {isLocal && (
            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Local Package *</label>
              <select
                value={formData.localPackage}
                onChange={(e) => setFormData({ ...formData, localPackage: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                required
              >
                <option value="4-hours">4 Hours (Half Day)</option>
                <option value="8-hours">8 Hours (Full Day)</option>
              </select>
            </div>
          )}

          {isTour && (
            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Tour Package *</label>
              <select
                value={formData.tourPackage}
                onChange={(e) => setFormData({ ...formData, tourPackage: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                required
              >
                <option value="mysore-one-day-tour">Mysore One Day Tour</option>
                <option value="mysore-to-coorg">Mysore to Coorg</option>
                <option value="mysore-to-ooty">Mysore to Ooty</option>
                <option value="mysore-to-wayanad">Mysore to Wayanad</option>
              </select>
            </div>
          )}

          {/* Trip Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Pickup *</label>
              <input
                type="text"
                value={formData.pickup}
                onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                placeholder="Pickup location"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                required
              />
            </div>

            {isLocal ? (
              <div className="hidden md:block" />
            ) : (
              <div>
                <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">{isTour ? 'Drop (optional)' : 'Drop *'}</label>
                <input
                  type="text"
                  value={formData.drop}
                  onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                  placeholder={isAirport ? 'Airport / destination' : 'Drop location'}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                  required={!isTour}
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Date *</label>
              <input
                type="date"
                value={formData.departDate}
                onChange={(e) => setFormData({ ...formData, departDate: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Time</label>
              <input
                type="time"
                value={formData.departTime}
                onChange={(e) => setFormData({ ...formData, departTime: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
              />
            </div>

            {(isOutstation || isTempo) && formData.tripType === 'roundtrip' ? (
              <div>
                <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Return Date *</label>
                <input
                  type="date"
                  value={formData.returnDate}
                  onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                  min={formData.departDate || new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                  required
                />
              </div>
            ) : (
              <div className="hidden md:block" />
            )}

            <div className="hidden md:block" />
          </div>

          {/* Passengers & Vehicle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Passengers *</label>
              <select
                value={formData.passengers}
                onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
                required
              >
                {passengerOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wide text-slate-600 mb-2">Vehicle Type</label>
              <select
                value={formData.vehicle}
                onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 outline-none transition"
              >
                {vehicleOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-lg transition-colors shadow-sm hover:shadow flex items-center justify-center"
          >
            Send on WhatsApp
          </button>

          <p className="text-center text-sm text-slate-600">
            Prefer a call?{' '}
            <a href={`tel:${BUSINESS_INFO.phone}`} className="text-blue-700 font-semibold hover:underline">
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </p>
        </form>
      )}
    </div>
  );
}
