import React from 'react';
import { CreditCard, Zap, Shield, Check } from 'lucide-react';
import { toast } from 'react-hot-toast';
import GooglePayButton from '@google-pay/button-react';

interface CreditsPurchaseProps {
  onClose: () => void;
  onPurchase: (amount: number) => void;
}

function CreditsPurchase({ onClose, onPurchase }: CreditsPurchaseProps) {
  const plans = [
    {
      credits: 10,
      price: 4.99,
      popular: false,
      perCredit: '0.49'
    },
    {
      credits: 50,
      price: 19.99,
      popular: true,
      perCredit: '0.39'
    },
    {
      credits: 100,
      price: 34.99,
      popular: false,
      perCredit: '0.34'
    }
  ];

  const handlePaymentSuccess = (paymentData: any, plan: typeof plans[0]) => {
    console.log('Payment Successful:', paymentData);
    onPurchase(plan.credits);
    toast.success(`Successfully purchased ${plan.credits} credits!`);
    onClose();
  };

  const handlePaymentError = (error: Error) => {
    console.error('Payment Error:', error);
    toast.error('Payment failed. Please try again.');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Get More Credits</h2>
          <p className="text-gray-600">Choose the plan that works best for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.credits}
              className={`relative bg-white rounded-xl border-2 ${
                plan.popular ? 'border-indigo-600 shadow-lg' : 'border-gray-200'
              } p-6 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white text-sm py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-gray-500 ml-1">/one-time</span>
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {plan.credits} Credits
                </div>
                <div className="text-sm text-gray-500">
                  ${plan.perCredit} per credit
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Unlimited message analysis</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>AI-powered smart feedback</span>
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Credits never expire</span>
                </li>
              </ul>

              <div className="mt-auto">
                <div className={`p-3 rounded-lg ${
                  plan.popular ? 'bg-indigo-50' : 'bg-gray-50'
                } mb-4`}>
                  <GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                      apiVersion: 2,
                      apiVersionMinor: 0,
                      allowedPaymentMethods: [{
                        type: 'CARD',
                        parameters: {
                          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                          allowedCardNetworks: ['MASTERCARD', 'VISA'],
                        },
                        tokenizationSpecification: {
                          type: 'PAYMENT_GATEWAY',
                          parameters: {
                            gateway: 'example',
                            gatewayMerchantId: 'exampleGatewayMerchantId',
                          },
                        },
                      }],
                      merchantInfo: {
                        merchantId: '12345678901234567890',
                        merchantName: 'MessageAI Credits',
                      },
                      transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: plan.price.toFixed(2),
                        currencyCode: 'USD',
                        countryCode: 'US',
                      },
                    }}
                    onLoadPaymentData={(paymentData) => handlePaymentSuccess(paymentData, plan)}
                    onError={handlePaymentError}
                    buttonType="buy"
                    buttonColor="black"
                    className="w-full"
                  />
                </div>
                <p className="text-xs text-center text-gray-500">
                  Secure payment processed by Google Pay
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 border-t pt-6">
          <div className="flex items-center">
            <Shield className="w-4 h-4 mr-1" />
            Secure SSL encryption
          </div>
          <div className="flex items-center">
            <Zap className="w-4 h-4 mr-1" />
            Instant credit delivery
          </div>
          <div className="flex items-center">
            <CreditCard className="w-4 h-4 mr-1" />
            30-day money back guarantee
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditsPurchase;