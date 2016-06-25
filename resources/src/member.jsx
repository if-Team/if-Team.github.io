var Member = React.createClass({
    propTypes: {
        naver: React.PropTypes.string.isRequired,
        naverId: React.PropTypes.string.isRequired,

        github: React.PropTypes.string,
        githubId: React.PropTypes.string,

        grade: React.PropTypes.string
    },

    render: function() {
        return <div className="member chip">
            <img src={this.props.githubId ? `https://avatars2.githubusercontent.com/u/${this.props.githubId}?v=3&s=50` : `resources/img/mk_icon.png`} />
            <span className="member title tooltipped" data-position="bottom" data-delay="50" data-tooltip={this.props.naverId}>{this.props.naver}</span>
            <span className="member github"><a href={'https://github.com/' + this.props.github}>{this.props.github && ('@' + this.props.github)}</a></span>
            <span className="member grade light-blue-text text-darken-3">{this.props.grade}</span>
        </div>;
    }
});

var MemberList = React.createClass({
    render: function(){
        return <ul className="members">
            <Member naverId="yale2a1"      github="MuhunKim"      githubId="5278201"  grade=""      naver="BetaFish" />
            <Member naverId="amato17"      github="ChalkPE"       githubId="9481405"  grade="Leader"naver="ChalkPE" />
            <Member naverId="lwh8762"      github="CirclePE"      githubId="10684388" grade=""      naver="Circle" />
            <Member naverId="ska827"       github="cr0sh"         githubId="13118114" grade=""      naver="Cr0sh" />
            <Member naverId="sct2001"      github="HailCryptic"   githubId="19639378" grade=""      naver="cryptic" />
            <Member naverId="angello10"    github="angello10"     githubId="9531062"  grade=""      naver="Dark" />
            <Member naverId="hustlerhlk"   github="DeBe0"         githubId="13284800" grade=""      naver="DeBe" />
            <Member naverId="hmkuak"       github="HmHmmHm"       githubId="8337568"  grade="Staff" naver="hm" />
            <Member naverId="deu07115"     github="HelloWorld017" githubId="3919433"  grade=""      naver="Khinenw" />
            <Member naverId="woni8708"     github="Khoneki"       githubId="9482404"  grade=""      naver="Khoneki" />
            <Member naverId="b_science"    github="Semteul"       githubId="6727533"  grade="Staff" naver="SemteulGaram" />
            <Member naverId="nno88551"     github="milk0417"      githubId="9590938"  grade=""      naver="SW승원" />
            <Member naverId="cksdid726"    github="You726"        githubId="5254268"  grade=""      naver="You" />
            <Member naverId="enenwld80605" github="Duduzzing"     githubId="10470392" grade=""      naver="두두찡" />
            <Member naverId="ehddnjs9719"  github="BloodType-AB"  githubId="11348711" grade="Staff" naver="멸종위기의 AB형" />
            <Member naverId="jyc0410"      github="onebone"       githubId="3233503"  grade="Staff" naver="원본" />
            <Member naverId="twjun0212"    github=""              githubId=""         grade=""      naver="조합자" />
            <Member naverId="canghaun"     github="Hanarin"       githubId="6566972"  grade="Staff" naver="하나린" />
        </ul>;
    }
});

ReactDOM.render(
    <MemberList />,
    document.getElementById('members-view')
);
