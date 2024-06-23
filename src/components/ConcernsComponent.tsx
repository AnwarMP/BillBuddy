'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const concernOptions = [
  { id: 'reduce_my_bill', label: 'Reduce my bill' },
  { id: 'policy_questions', label: 'Policy questions' },
  { id: 'add_a_member', label: 'Add a member' },
  { id: 'calculate_my_bill', label: 'Calculate my bill' },
  { id: 'find_a_provider', label: 'Find a provider' },
  { id: 'medication_costs', label: 'Medication costs' },
];

type Props = { chatId: number };

const ConcernsComponent = ({ chatId }: Props) => {
  const router = useRouter();
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [otherConcern, setOtherConcern] = useState('');

  const saveConcernsMutation = useMutation({
    mutationFn: async (concerns: string[]) => {
      const response = await axios.post('/api/save-concerns', { chatId, concerns });
      return response.data;
    },
    onSuccess: () => {
      toast.success('Concerns saved successfully!');
      router.push(`/chat/${chatId}`);
    },
    onError: (error) => {
      toast.error('Failed to save concerns. Please try again.');
      console.error('Error saving concerns:', error);
    },
  });

  const handleConcernToggle = (concernId: string) => {
    setSelectedConcerns((prev) =>
      prev.includes(concernId)
        ? prev.filter((id) => id !== concernId)
        : [...prev, concernId]
    );
  };

  const handleSubmit = () => {
    const concerns = [
      ...selectedConcerns,
      ...(otherConcern ? ['other'] : []),
    ];
    saveConcernsMutation.mutate(concerns);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          What can I help you with?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {concernOptions.map((option) => (
            <Button
              key={option.id}
              onClick={() => handleConcernToggle(option.id)}
              variant={selectedConcerns.includes(option.id) ? "default" : "outline"}
              className="justify-start h-auto py-2"
            >
              {option.label}
            </Button>
          ))}
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Other (type here)"
            value={otherConcern}
            onChange={(e) => setOtherConcern(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <Button
          onClick={handleSubmit}
          className="w-full mt-6"
        >
          { 'Submit'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConcernsComponent;
