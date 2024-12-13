"use client";

const PromisePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="mx-auto bg-white w-[21cm] h-auto p-[2cm] shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-8">
          제3대 고양특례시테니스협회 회장후보 백금선 공약
        </h1>

        <div className="space-y-6">
          <section>
            <p className="text-base leading-relaxed">
              안녕하세요! 제3대 고양특례시테니스협회 회장 후보 백금선입니다.
              <br />
              <br />
              저는 8년간 덕양구테니스연합회장으로 활동하며 쌓은 경험과 도덕적
              일관성을 바탕으로, 테니스 동호인들의 권리와 이익을 최우선으로
              고려하는 협회장이 되겠습니다. <br />
              안정적이고 투명한 협회 운영을 목표로 하며, 아래의 사업들을
              추진하고자 합니다.
              <br />
              <br />
              저에게 힘을 실어주셔서 함께 발전하는 고양특례시테니스협회를 만들어
              나갈 수 있기를 부탁드립니다. <br />
              <br />
              1.위수탁코트(토당, 충장, 화정공원, 성라, 대화, 중산,
              서구유수지(4면), 원흥(5면))는 위수탁 클럽들이 전용으로 사용하며,
              개인은 시설관리공단(성사는 실내코트 제외 50%) 및 공공기관 코트를
              이용하도록 협의할 예정입니다. 이를 통해 예약의 불편함을 완전히
              해소하고 클럽 위주의 협회로 발전하겠습니다. 또한, 각 위수탁코트의
              시설물에 대한 요구사항(라이트, 샤워시설, 가지치기 등)을 적극
              수용하여 개선하겠습니다.
              <br /> 2.고양시, 시의원, 도의원, 국회의원과의 원활한 소통을 통해
              관내 테니스장을 증설하고, 비활용 중인 공공기관의 코트를 협의하여
              충분한 테니스 코트를 확보하겠습니다. <br />
              3.자문 변호사와 협약을 맺어 아파트 단지의 분쟁 클럽이 직면한
              문제를 해결하기 위해 노력하겠습니다. 또한, 소규모 클럽의 대회 참가
              시 우승할 경우 1년간 3명의 분리 출전을 허용하는 방안을
              개선하겠습니다. <br />
              4.고양특례시테니스협회 홈페이지에 등록된 회원의 자격을 검토하고
              예약자 및 실 이용자를 관리하여, 위수탁 코트 외의 다른 코트에
              대해서는 관내 주민들의 접근성을 유지하고, 타 시도 주민의 사용을
              통제함으로써 지역 주민들의 민원을 최소화하도록 하겠습니다.
              <br />
              5.회원들의 개인 점수를 투명하게 공개하고 데이터베이스화하여 경기
              중 회원 점수를 명확히 관리하겠습니다. <br />
              6.각 지부(3구) 테니스연합회에 지원금 배분과 코트비 할인 등의
              지원을 통해 연합회의 재정적 안정을 확보하고, 이를 통해 회원들에게
              실질적인 혜택(참가비, 상금, 상품)을 제공하겠습니다. <br />
              7.상금을 증액하고 지역 할당(10%)을 보장하는 전국대회를 개최하며,
              지역 신인부를 신설하여 고양시 회원의 대회 참여 기회를
              확대하겠습니다. <br />
              8.각 지부(3구)에서 능력 있고 테니스에 진심인 임원을 선출하여
              서로의 의견을 존중하고 화합된 협회를 운영하겠습니다. 또한,
              사무국장의 업무를 총무와 재무로 분리하고 반기 회계 공개를 통해
              투명한 협회 운영을 실현하겠습니다. <br />
              9.협찬, 수익 사업, 민간 후원, 기업 출연, 정부 지원, 기금 유치 등을
              통해 재정을 확보하고, 회원들에게 공평하고 많은 혜택을
              제공하겠습니다. <br />
              <br />
              첨부파일에는 해당 공약에 대한 자세한 설명이 들어 있으니 꼭
              읽어보시기 바랍니다.
            </p>
            <br />
            <br />
            <p className="text-right font-semibold">
              제 3대 고양특례시테니스협회 회장후보
            </p>
            <p className="text-right font-semibold"> 백금선 올림</p>

            <div className="mt-8 flex justify-center">
              <a
                href="/files/고양특례시_테니스협회장후보_공약.pdf"
                download
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                첨부파일 다운로드
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PromisePage;
